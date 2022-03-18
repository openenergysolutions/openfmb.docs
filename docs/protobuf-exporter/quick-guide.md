---
sidebar_position: 4
---

# Getting Started

1. Start [Enterprise Architect](https://sparxsystems.com/) and load [OpenFMB UML model](https://gitlab.com/openfmb/pim/ops/-/blob/master/OpenFMB%20Operational%20Model%20(61850-CIM)%20(v2.0.0).eap)

    ![image](https://user-images.githubusercontent.com/43071770/154147105-4cd939b7-c508-46b0-a5fd-085b506ebb58.png)

2. On "Project Browser" window, right click on "OpenFMB", select "Specialize", "OpenFMB Protobuf Exporter", then click on "Export to proto files..." to launch to add-in tool

    ![image](https://user-images.githubusercontent.com/43071770/154147389-1c02048f-5bba-4357-89fc-a05838870679.png)

3. The OpenFMB Protobuf Exporter will build a Tree View containing the model information with check boxes next to the Tree Nodes that are specific to the generation of the Protobuf files in the left pane and processing information in the right pane. Since it is used by the other modules, the Common is always checked.

    ![image](https://user-images.githubusercontent.com/43071770/154147925-f3482a91-5103-4d0c-8e34-46c4c981c7ad.png)

    ![image](https://user-images.githubusercontent.com/43071770/154148027-246620b8-41bf-4499-b391-5d57dfb972e1.png)

    By default, all the modules are checked.  Uncheck the modules that you do not want to be generated.

4. Click on Export Protobuf button to start exporting

5. When the generation process completes with no errors, the “Save Protobuf” button will be enabled. Clicking the “Save Protobuf” button will bring up a “Browse For Folder” window to allow the user to browse to the directory where the Protobuf files will be saved. When the save process completes, the right pane will display the Protobuf files saved with their absolute paths and the message “Save complete…”

    ![image](https://user-images.githubusercontent.com/43071770/154149301-3034a786-a12c-49a7-80db-f2ec29414444.png)

    The save process will create the Protobuf directory structure if it does not exist. If the directory structure does exist, then the save process will overwrite the existing files. The Protobuf directory structure under the user selected directory is openfmb/Protobuf Module Name.

6. Errors during exporting protobuf

    If an error is encountered during processing, the following will be displayed after all error messages:
    - An error was encountered while generating the proto3 files.
    - The saving of the proto3 files has been disabled.
    - Please correct the error(s) listed and regenerate the proto3 files.

    At this point the user has the following options:
    - Reselect the nodes that do not have errors and generate the Protobuf information. This option will not export a full set of Protobuf files.
    - Close the Tree View window, fix the errors, and re-export the Protobuf information
