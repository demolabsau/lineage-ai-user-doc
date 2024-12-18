import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHeader from '@site/src/components/HomepageHeader';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageInvite from '@site/src/components/HomepageInvite';
import HomepageFeature from '@site/src/components/HomepageFeature';
import { ThemeSyncProvider } from '../context/ThemeSyncProvider';
import { LandingPrimaryTextCtaSection } from '@site/src/components/landing/cta/LandingPrimaryCta';
const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem',
    },
    sectionTitle: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginTop: '2.5rem',
        marginBottom: '1.5rem',
        color: 'var(--ifm-color-primary-darker)',
    },
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
        marginBottom: '2rem',
    },
    linkList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    link: {
        color: 'var(--ifm-color-primary)',
        textDecoration: 'none',
        fontSize: '1rem',
        lineHeight: 1.5,
        display: 'block',
        marginBottom: '1rem',
    },
};
// function QuickGuides() {
//     return (
//         <div className="container margin-top--lg margin-bottom--lg">
//             <div className="row">
//                 <div className="col col--8 col--offset-2">
//
//                     <h3>Usage</h3>
//                     <ul>
//                         <li>
//                             <a href="/lineage-ai-user-doc/usage/intro">Product Introduction</a>
//                         </li>
//                         <li>
//                             <a href="/lineage-ai-user-doc/usage/dashboard">Quick start for Dashboard</a>
//                         </li>
//                         <li>
//                             <a href="/lineage-ai-user-doc/usage/analyse">Quick start for Analyze Job</a>
//                         </li>
//                         <li>
//                             <a href="/lineage-ai-user-doc/usage/api">Quick start for Lineage-AI backend API</a>
//                         </li>
//                     </ul>
//
//                     <h3>Deploy</h3>
//                     <ul>
//                         <li>
//                             <a href="/lineage-ai-user-doc/deploy/intro">Deployment Overview</a>
//                         </li>
//                         <li>
//                             <a href="/lineage-ai-user-doc/deploy/start">Deploy on public cloud</a>
//                         </li>
//                         <li>
//                             <a href="/lineage-ai-user-doc/deploy/env">Environment Variables Reference</a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }
function QuickGuides() {
    return (
        <div style={styles.container}>
            {/* Usage Section */}
            <h2 style={styles.sectionTitle}>Product Quick Start</h2>
            <div style={styles.gridContainer}>
                <div>
                    <ul style={styles.linkList}>
                        <li>
                            <a href="/lineage-ai-user-doc/docs/usage/intro" style={styles.link}>
                                Product Introduction
                            </a>
                        </li>
                        <li>
                            <a href="/lineage-ai-user-doc/docs/usage/dashboard" style={styles.link}>
                                Quick start for Dashboard
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul style={styles.linkList}>
                        <li>
                            <a href="/lineage-ai-user-doc/docs/usage/analyse" style={styles.link}>
                                Quick start for Analyze Job
                            </a>
                        </li>
                        <li>
                            <a href="/lineage-ai-user-doc/docs/usage/api" style={styles.link}>
                                Quick start for Lineage-AI backend API
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Deploy Section */}
            <h2 style={styles.sectionTitle}>Product Deploy</h2>
            <div style={styles.gridContainer}>
                <div>
                    <ul style={styles.linkList}>
                        <li>
                            <a href="/lineage-ai-user-doc/docs/deploy/intro" style={styles.link}>
                                Deployment Overview
                            </a>
                        </li>
                        <li>
                            <a href="/lineage-ai-user-doc/docs/deploy/start" style={styles.link}>
                                Deploy on public cloud
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul style={styles.linkList}>
                        <li>
                            <a href="/lineage-ai-user-doc/docs/deploy/env" style={styles.link}>
                                Environment Variables Reference
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default function HelpCenter() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Smarter Insights with AI-Powered Data Lineage">
      <ThemeSyncProvider>
        <main className='w-full'>
          <LandingPrimaryTextCtaSection
            title={
              <>
                Help Guides
              </>
            }
            description="Get started with our help guides to learn how to setup and use our platform."
            variant="primary"
            withBackground
          >
          </LandingPrimaryTextCtaSection>
          <QuickGuides />

        </main>
      </ThemeSyncProvider>
    </Layout>
  );
}
