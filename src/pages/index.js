import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/openfmb/intro">
            Introduction - 10min ⏱️
          </Link>          
        </div>
        <div style={{paddingTop: 3 + 'em'}}>          
          <p className="hero__subtitle">New Release of OpenFMB Adapter 2.1</p>
          <Link to="/docs/openfmb/features" className="button button--secondary button--sm">What's New in OpenFMB 2.1 Data Model</Link><br/><br/>
          <Link to="/docs/adapter-extensions" className="button button--secondary button--sm">Extensible Adapters</Link>          
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="OpenFMB Adapter Toolset from Open Enery Solutions (OES)">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
