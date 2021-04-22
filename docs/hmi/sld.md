---
sidebar_position: 5
---

# Single-Line Diagram

A single-line diagram, also sometimes called one-line diagram, gives you an overview or part of an electrical power system.  In this section, you'll learn how to use OpenFMB HMI tool to build a single-line diagram that represents a very simple micrgrid.  

A typical scheme of an electrical based microgrid with solar as renewable energy resource would be:

![](img/microgrid.png)

There are four electrical equipment to represent on the single-line diagram.  Not that for simplicity, we don't need to draw any of the transformers nor AC/DC converters.

- Building Load: power consumption
- Solar PV: power production from solar panels
- Battery Energy Storage: charge from solar and discharge to supply power
- Circuit Breaker at PCC (Point of Common Coupling): connect and disconnect to larger distribution grid

We want to design our single-line diagram such that an operator can:

- Monitor the power consumption
- Monitor the power production from solar
- Monitor the State of Charge (SOC) of the battery
- Island or reconnect to distribution grid

## To Build The Diagram

1. First, we need to add the four equipment that we identified above.  On OpenFMB HMI side navigator menu, click on Settings, then click on Devices

2. For each equpment, click on "ADD DEVICE" to bring up the add device dialog and enter the following information
    - Building Load: 
        - Name: load
        - Device Type: load
        - MRID: Generate new MRID
    - Solar PV:
        - Name: Solar
        - Device Type: solar
        - MRID: Generate new MRID   
    - Battery Energy Storage:
        - Name: Battery
        - Device Type: ess
        - MRID: Generate new MRID
    - Circuit Breaker at PCC:
        - Name: Breaker
        - Device Type: breaker
        - MRID: Generate new MRID 
    
   The device list shall look like this:

    ![](img/devices.png)

3. On OpenFMB HMI home page, click on "Diagrams"

4. Click on "ADD DIAGRAM" button and fill out diagram's name, description, and location.  
 
5. Click "SAVE" to save

6. On Action column of the newly created diagram, click the "Design" icon to bring up design canvas for the diagram

    ![](img/design-mode.png)

7. Drag and drop symbols (on left panel) onto the canvas.  We need:
    - A Controllable Load symbol (for build load)
    - A Solar Panel symbol
    - A Battery Energy Storage System (ESS) symbol
    - A Circuit Breaker symbol
    - A Feeder symbol to represent distribution grid (for completeness)

8. We need to assign the symbol with its MRID for identification purpose.  For each symbols that we just dropped onto the canvas:
    - **Double click** on the symbol to bring up `Symbol Property Dialog`
    - On the dialog name drop down, select the appropriate device to assign to the symbol.  Note that the MRID is automatically populated according to the selection
    - On label text box, enter label text to be display on the diagram (optional)
    
8. To connect the symbols, select "Connect" menu on top panel.  For each symbol we want to connect:
    - hover your mouse over the symbol connection port (the connection port is highlighted in green when hovered over) 
    - select and hold down mouse and drag to other symbol connection port

    ![](img/diagram1.png)

9. At this point, we have a basic single-line diagram that represent our microgrid, but it is not yet useful.  We need measurement displays to monitor readings and/or status from our equipment.  We need to add three `measurement boxes` to the canvas: one for each building load, solar, and battery. 

    - Drag `measurement box` to canvas
    - Select name
    - Enter label text

10. Now for the three measurement boxes, we need to tell the system what data item to display on the box, or in this tool's terminilogy, it is `Data Connection`.

    - **Double click** on the measurement box to bring up `Symbol Property Dialog`
    - Click on "Data Connection" to go to "Data Connection" screen
    - For data connection and mapping, the screen has two main panels:
        - Left Panel: list of items to be displayed on measurement box
        - Right Panel: navigate through OpenFMB modules, profiles, and select data items to add to left panel            
            ![](img/data-connect1.png)
    - For the Building Load, we want to monitor the total power consumption (Total kW):
        - On right panel, select `loadmodule` module, the select `LoadReadingProfile`
        - Filter or navigate to `readingMMXU.W.net.cVal.mag` and click `+` button to add to left panel
            ![](img/data-connect2.png)
    - For the Solar, we want to monitor the total power production (Total kW):
        - On right panel, select `solarmodule` module, the select `SolarReadingProfile`
        - Filter or navigate to `readingMMXU.W.net.cVal.mag` and click `+` button to add to left panel
    - For the Battery, we want to monitor the current State of Charge (SOC %):
        - On right panel, select `essmodule` module, the select `ESSStatusProfile`
        - Filter or navigate to `essStatus.essStatusZBAT.Soc.mag` and click `+` button to add to left panel 
            ![](img/diagram2.png)           

11. We now have the measurement boxes for monitoring reading and status.  One more step we need to do is to `data connect` the Circuit Breaker (PCC) so that it shows correct position (Open/Close) and allows trip/close operations

    - **Double click** on the breaker symble to bring up `Symbol Property Dialog`
    - Click on "Data Connection" to go to "Data Connection" screen
    - To map the breaker position:
        - Select `Event, Reading, or Status` tab on left panel
        - On right panel, select `breakermodule` module, the select `BreakerStatusProfile`
        - Filter or navigate to `breakerStatus.statusAndEventXCBR.Pos.phs3.stVal` and click `+` button to add to left panel
    - To map the breaker control for trip/close operations:
        - Select `Control` tab on left panel
        - On right panel, select `breakermodule` module, the select `BreakerDiscreteControlProfile`
        - Filter or navigate to `breakerDisc...eControlXCBR.discreteControlXCBR.Pos.phs3.ctlVal` and click `+` button to add to left panel
    
## Run The Diagram

Click on `RUN` button on top right corner to put the diagram in run mode.