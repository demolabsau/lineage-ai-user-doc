import {
  LandingProductTourSection,
  LandingProductTourList,
  LandingProductTourTrigger,
  LandingProductTourContent,
} from '@site/src/components/landing/LandingProductTour';
import { VideoPlayer } from '@site/src/components/shared/VideoPlayer';

export default function HomepageFeatures() {
  return (
    <>
      <LandingProductTourSection
        titleComponent={
          <h2 className="text-5xl font-semibold leading-tight">
            Effortless data lineage
            <br />
            Unmatched insights in moments
          </h2>
        }
        descriptionComponent={
          <div className="flex flex-col max-w-xl">
            <p className="mt-4 md:text-xl">
              Demo Labs Lineage AI is an advanced solution for understanding and
              documenting data flows across your organization.
            </p>

            <p className="mt-4 md:text-xl opacity-50">
              It automatically analyzes code, tracks data transformations, and
              visualizes dependencies, empowering your data governance strategy.
            </p>
          </div>
        }
        defaultValue="feature-1"
      >
        <LandingProductTourList>
          <LandingProductTourTrigger value="feature-1">
            <p className="text-xl font-bold">Intelligent code analysis</p>
            <p>
              Utilize cutting-edge on-premises LLM to analyze transformation code, translating it into clear, 
              human-readable descriptions and visual flows.
            </p>
          </LandingProductTourTrigger>

          <LandingProductTourTrigger value="feature-2">
            <p className="text-xl font-bold">Column-level transformation tracking</p>
            <p>
              Track complex data transformations across multiple files and systems at column level,
               ensuring complete lineage visibility.
            </p>
          </LandingProductTourTrigger>

          <LandingProductTourTrigger value="feature-3">
            <p className="text-xl font-bold">Customizable schema mapping</p>
            <p>
              Automatically detect and map schemas while allowing manual adjustments
              for greater control over your data lineage analysis.
            </p>
          </LandingProductTourTrigger>

          <LandingProductTourTrigger value="feature-4">
            <p className="text-xl font-bold">Real-time visualization</p>
            <p>
              Instantly visualize data flows and dependencies with an intuitive,
              cloud-native interface, enabling faster decision-making.
            </p>
          </LandingProductTourTrigger>
        </LandingProductTourList>

        <LandingProductTourContent
          value="feature-1"
        >
          <VideoPlayer
            className={'w-full rounded-md'}
            src="https://cache.shipixen.com/features/11-pricing-page-builder.mp4"
            autoPlay={true}
            controls={false}
            loop={true}
          />
        </LandingProductTourContent>
        <LandingProductTourContent value="feature-2">
          <VideoPlayer
            className={'w-full rounded-md'}
            src={'https://cache.shipixen.com/features/21-run-locally.mp4'}
            autoPlay={true}
            controls={false}
            loop={true}
          />
        </LandingProductTourContent>
        <LandingProductTourContent value="feature-3">
          <VideoPlayer
            className={'w-full rounded-md'}
            src={
              'https://cache.shipixen.com/features/22-landing-page-components.mp4'
            }
            autoPlay={true}
            controls={false}
            loop={true}
          />
        </LandingProductTourContent>
        <LandingProductTourContent value="feature-4">
          <VideoPlayer
            className={'w-full rounded-md'}
            src={'https://cache.shipixen.com/features/20-mobile-optimized.mp4'}
            autoPlay={true}
            controls={false}
            loop={true}
          />
        </LandingProductTourContent>
      </LandingProductTourSection >
    </>
  );
}
