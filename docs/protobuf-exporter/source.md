---
sidebar_position: 5
---

# Develop

Source code can be downloaded from:

https://github.com/openenergysolutions/openfmb.eaprotobufexporter

## Cloning

Clone the repository 

```bash
git clone https://github.com/openenergysolutions/openfmb.eaprotobufexporter.git
```

## Building

The OpenFMB Protobuf Export is written in C# Winform.  Microsoft Visual Studio is needed to build the tool.  The output is the `EAProtobufExporter.dll` that can be manually installed in **Manual Installation** section below.

## Manual Installation

Manually installing the OpenFMB Protobuf Exporter can be done by following these steps:
1.	Copy the EAProtobufExporter.dll to the desired directory (i.e. “C:\Program Files\OpenFMB\bin”)

2.	Register the DLL by running the Assembly Registration Tool
    ```bash
    C:\Windows\Microsoft.NET\Framework\v4.0.30319\RegAsm.exe "C:\Program Files\OpenFMB\bin\EAProtobufExporter.dll" /codebase
    ```
3.	Create a new entry in the registry by running regedit. This will allow Enterprise Architect to recognize the presence of the OpenFMB Protobuf Exporter Add-In. Add the new key value “EAAddIns” under the appropriate location:
    - For single users: “HKEY_CURRENT_USER\Software\Sparx Systems”
    - For multiple users: “HKEY_LOCAL_MACHINE\Software\Sparx Systems”
    
4.	Under the “EAAddIns” key, add a new key value using the project name “EAProtobufExporter” of the OpenFMB Protobuf Exporter Add-In

5.	Under the “EAProtobufExporter” key, modify the default value by entering the "project-name.class-name" of the OpenFMB Protobuf Exporter Add-In “EAProtobufExporter.Main”