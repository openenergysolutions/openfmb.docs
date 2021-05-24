---
sidebar_position: 1
---

# Introduction

OpenFMB HMI is a Human Machine Interface web-based application used to design single-line diagrams with control and monitor capabilities.

## Overview

- **Diagram management**: 
    - create/update/delete diagrams
    - export/import diagram

- **Diagram designer**:

    Design mode is used to design single-line diagrams. Electrical symbols are dragged and dropped into the design canvas. Symbols are then connected together to make a meaningful single- line diagrams representing an electrical distribution infrastructure. Symbols can then be mapped to specific OpenFMB data points for the real-time display of information from microgrids, substations, etc.   

- **Run-time mode**: 
    
    Run-time mode is diagrams in action supervising data and/or controlling the underlined microgrid or substations. 

- **User management**: 

   - create/update/delete users

   - role assignment

       - viewer role: read-only

       - engineer role: viewer role + create diagram

       - admin role: engineer role + user management
