---
sidebar_position: 2
---

# Protos

The protos used in this adapter are those defined in this repository:
[openenergysolutions/openfmb-schemas](https://github.com/openenergysolutions/openfmb-schemas)

The protos are essential to the adapter and the same version across devices
should be used (although protobufs provides some level of
backward-compatibility).

The standard protos are designed in UML. A custom exporter for Enterprise
Architect is used to generate both Google Protobuf definitions and an IDL file.
Some custom code generation is used to generate C++ code used in this adapter.
When the protos are changed or if you want to use custom protos, changes to the
code and recompilation is necessary to build a new adapter.

## Adding a new profile

To add a new profile, follow this procedure:

- In the code generator, in `com.oes.openfmb.generation.Profiles`, add the
  profile descriptor. You will need to execute a `mvn verify` before to
  regenerate the Protobuf. Then, execute the codegenerator. If new repeated
  fields or enum values were added, then exceptions will be thrown. Classify the
  new repeated types in `com.oes.openfmb.generation.proto.RepeatedType` and the
  new enums in `com.oes.openfmb.generation.proto.TypeClassification`.
- Add the module (if necessary) to the `CMakeLists.txt` file in `proto-api`.
- Add the additional generated files in the `CMakeLists.txt` file in
  `adapter-util`.
- Add the profile in `adapter-api/include/adapter-api/ProfileRegistry.h`
- In `adapter-util/include/adapter-util/ProfileInfo.h`, add a template
  specialization for the profile:
```cpp
template <>
struct profile_info<breakermodule::BreakerReadingProfile> {

    static constexpr ProfileType type = ProfileType::Reading;

    static const commonmodule::MessageInfo& get_message_info(const breakermodule::BreakerReadingProfile& profile)
    {
        return profile.readingmessageinfo().messageinfo();
    }

    static const commonmodule::ConductingEquipment& get_conducting_equip(const breakermodule::BreakerReadingProfile& profile)
    {
        return profile.breaker().conductingequipment();
    }
};
```
- For control profiles, in
  `adapter-util/include/adapter-util/schedule/ScheduleExtractors.h`, add a
  template specialization for the profile. Note that `get_control_fscc` is
  necessary only when a `commonmodule::ControlFSCC` is present in the profile.
  Also note that `custom_point_t`, `has_custom_points` and `get_custom_points`
  are only necessary if custom schedule points are present in the profile.
```cpp
template <>
struct schedule_extractor<essmodule::ESSControlProfile>
{
    static void set_source_mrid(essmodule::ESSControlProfile& profile, const std::string& mrid)
    {
        profile.mutable_ess()->mutable_conductingequipment()->set_mrid(mrid);
    }

    static void set_message_mrid(essmodule::ESSControlProfile& profile, const std::string& mrid)
    {
        profile.mutable_controlmessageinfo()->mutable_messageinfo()->mutable_identifiedobject()->mutable_mrid()->set_value(mrid);
    }

    static commonmodule::Timestamp* get_message_timestamp(essmodule::ESSControlProfile& profile)
    {
        return profile.mutable_controlmessageinfo()->mutable_messageinfo()->mutable_messagetimestamp();
    }

    static commonmodule::ControlFSCC* get_control_fscc(essmodule::ESSControlProfile& profile)
    {
        return profile.mutable_esscontrol()->mutable_esscontrolfscc()->mutable_controlfscc();
    }

    using custom_point_t = essmodule::ESSPoint;

    static bool has_custom_points(const essmodule::ESSControlProfile& profile)
    {
        return profile.esscontrol().esscontrolfscc().esscontrolschedulefsch().has_valdcsg();
    }

    static google::protobuf::RepeatedPtrField<custom_point_t>* get_custom_points(essmodule::ESSControlProfile& profile)
    {
        return profile.mutable_esscontrol()->mutable_esscontrolfscc()->mutable_esscontrolschedulefsch()->mutable_valdcsg()->mutable_crvpts();
    }
};
```
- Try compiling the adapter with all the plugins, and make sure it succeeds.
  Also execute the unit tests with `ctest .`. If something fails, then find the
  issue yourself or ask Émile for help (that's me btw, so prefer finding it by
  yourself).
- In the test harness, in `io.github.openfmb.harness.MessageFactory`, add the
  profile with a method to access the mRID.

## Profile categories

There are four profile types recognized by the adapter:

- Reading profiles: are used for rapidly gathered values
- Status profiles: are used for rapidly gathered values
- Event profiles: report only the changes since the most recent status
- Control/Discrete Control profiles: control a device. This includes executing
  schedules as described in the [scheduling section](/misc/scheduling)
