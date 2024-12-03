import { LandingSaleCtaSection } from '@site/src/components/landing/cta/LandingSaleCta';
import { LandingSocialProof } from '@site/src/components/landing/social-proof/LandingSocialProof';

const avatarItems = [
  {
    imageSrc: 'https://picsum.photos/id/64/100/100',
    name: 'John Doe',
  },
  {
    imageSrc: 'https://picsum.photos/id/65/100/100',
    name: 'Jane Doe',
  },
  {
    imageSrc: 'https://picsum.photos/id/669/100/100',
    name: 'Alice Doe',
  },
];

export default function Component() {
  return (
    <LandingSaleCtaSection
      title="Elevate Your Data Governance Today"
      descriptionComponent={
        <>
          <p>
            Join leading organizations transforming their data operations with Demo Labs Lineage AI. From code analysis to complete data lineage visualization, we’re here to streamline every step of the process.
          </p>
        </>
      }
      ctaHref="#"
      ctaLabel="Start your journey now"
    />

  );
}
