import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Unified Datamodel',
    img: require('@site/static/img/openfmb_logo.png').default,
    description: (
      <>
        Unified and open datamodel with OpenFMB.
      </>
    ),
  },
  {
    title: 'Adapter for Existing Protocols',
    img: require('../../static/img/universal_converter_box.png').default,
    description: (
      <>
        Adapter software to communicate with common existing protocols such
        as Modbus and DNP3.
      </>
    ),
  },
  {
    title: 'Open Source Approved License ',
    Svg: require('../../static/img/osi_logo.svg').default,
    description: (
      <>
        Licensed under Apache 2.0, an OSI Approved license..
      </>
    ),
  },
];

function Feature({img, Svg, title, description}) {
  var splash;
  if(img != null) {
    splash = <img src={img} />
  } else {
    splash = <Svg className={styles.featureSvg} alt={title} />
  }

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {splash}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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