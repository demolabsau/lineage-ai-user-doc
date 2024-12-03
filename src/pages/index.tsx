import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHeader from '@site/src/components/HomepageHeader';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageInvite from '@site/src/components/HomepageInvite';
import HomepageFeature from '@site/src/components/HomepageFeature';
import { ThemeSyncProvider } from '../context/ThemeSyncProvider';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Smarter Insights with AI-Powered Data Lineage">
      <ThemeSyncProvider>
        <main className='w-full'>
          <HomepageHeader />
          <HomepageFeatures />
          <HomepageFeature />
          <HomepageInvite />
        </main>
      </ThemeSyncProvider>
    </Layout>
  );
}
