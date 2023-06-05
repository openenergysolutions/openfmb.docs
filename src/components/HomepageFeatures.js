import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [

  {
    title: 'Extensible OpenFMB Adapter',
    img: require('../../static/img/features/adapter.png').default,
    description: (
      <>
        The adapter software acts as a translator, converting various protocols like DNP3, 
        Modbus, OCPP1.6, IEC-61850, ICCP, OpenADR, SEP 2.0, and more into OpenFMB format.
      </>
    ),
  },
  {
    title: 'Graphical Configuration Tool',
    img: require('../../static/img/features/config-tool.png').default,
    description: (
      <>
        A user-friendly desktop application designed to configure the OpenFMB Adapter 
        and to empower users to effortlessly map device protocols to the OpenFMB standard.
      </>
    ),
  },
  {
    title: 'Human Machine Interface',
    img: require('../../static/img/features/hmi.png').default,
    description: (
      <>
        A web-based, user-friendly graphical interface tool that allows users to draw one-line diagrams, 
        to monitor, and to control electrical devices via OpenFMB standard.
      </>
    ),
  },
  {
    title: 'OpenFMB Protobuf Exporter',
    img: require('../../static/img/features/protobuf-exporter.png').default,
    description: (
      <>
        The OpenFMB Protobuf Exporter is an Enterprise Architect Add-In to export OpenFMB UML 
        modules or packages as Protocol Buffer definition (.proto) files
      </>
    ),
  },
  {
    title: 'Unified Data Model',
    img: require('../../static/img/features/openfmb-logo.png').default,
    description: (
      <>
        Unified and open data model with OpenFMB.
      </>
    ),
  },
  {
    title: 'Open Source Approved License ',
    img: require('../../static/img/features/osi_logo.png').default,
    description: (
      <>
        Licensed under Apache 2.0, an OSI Approved license.
      </>
    ),
  }  
];

function Feature({img, Svg, title, description}) {
  var splash;
  if(img != null) {
    splash = <img src={img} width='300px' />
  } else {
    splash = <Svg className={styles.featureSvg} alt={title} />
  }

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" >
        {splash}
      </div>
      <div className="text--center padding-horiz--md" style={{padding: 3 + 'em'}}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (    
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
