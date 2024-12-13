import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHeader from '@site/src/components/HomepageHeader';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageInvite from '@site/src/components/HomepageInvite';
import HomepageFeature from '@site/src/components/HomepageFeature';
import { ThemeSyncProvider } from '../context/ThemeSyncProvider';

import { LandingPrimaryTextCtaSection } from '@site/src/components/landing/cta/LandingPrimaryCta';

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
        </main>
      </ThemeSyncProvider>
    </Layout>
  );
}
