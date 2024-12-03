import { Button } from '@site/src/components/shared/ui/button';
import { LandingProductFeature } from '@site/src/components/landing/LandingProductFeature';

export default function HomepageFeature() {
  return (
    <LandingProductFeature
      titleComponent={
        <h2 className="text-4xl font-bold text-center">
          LLM powered data lineage
        </h2>
      }
      descriptionComponent={
        <>
          <p>
            Demo Labs Lineage AI provides an advanced data lineage solution,
            combining intelligent code analysis, automated schema detection, and
            real-time visualization. Our system ensures you have full visibility into data flows,
            transformations, and dependencies, empowering efficient and secure data governance.
          </p>

          <Button className="mt-8" variant="primary" asChild>
            <a href="#">Explore the system</a>
          </Button>
        </>
      }
      imageSrc={require('@site/static/img/dummy_600x400_ffffff_cccccc_lineage-report-placeholder.png').default}
      imageAlt="Visualize Data Lineage with Ease"
      imagePosition="left"
      imagePerspective="none"
      zoomOnHover={false}
      imageShadow="soft"
      variant="primary"
    />

  );
}
