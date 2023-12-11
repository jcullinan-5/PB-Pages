/**
 * This is an example of how to create a template that makes use of streams data.
 * The stream data originates from Yext's Knowledge Graph. When a template in
 * concert with a stream is built by the Yext Sites system, a static html page
 * is generated for every corresponding (based on the filter) stream document.
 *
 * Another way to think about it is that a page will be generated using this
 * template for every eligible entity in your Knowledge Graph.
 */
import ErrorBoundaryWithAnalytics from "src/components/common/ErrorBoundaryWithAnalytics";
import { LazyLoadWrapper } from "src/components/common/LazyLoadWrapper";
import type { LocationProfile, TemplateRenderProps } from "src/types/entities";

import About from "src/components/entity/About";
import Banner from "src/components/entity/Banner";
import Core from "src/components/entity/Core";
import Gallery from "src/components/entity/Gallery";
import Hero from "src/components/entity/Hero";
import Nearby from "src/components/entity/Nearby";

import type { Template } from "@yext/pages";
import { Main } from "src/layouts/main";
import "src/index.css";

interface EntityLayoutProps {
  data: TemplateRenderProps<LocationProfile>;
}

const EntityLayout = ({ data }: EntityLayoutProps) => {
  const {
    id,
    yextDisplayCoordinate,
    name,
    address,
    description,
    hours,
    photoGallery,
    c_bannerSection: banner,
    c_heroSection: hero,
    c_promoSection: promo,
    c_featuredProductsSection: products,
    c_aboutSection: about,
    c_gallerySection: gallery,
    c_teamSection: team,
    c_faqSection: faq,
    c_nearbySection: nearby,
    c_eventsSection: events,
    c_insightsSection: insights,
    c_reviewsSection: reviews,
    dm_directoryParents: directoryParents,
  } = data.document;

  const showBanner = banner?.text && banner?.image;
  const showAbout = about?.title && (about.description || description);
  const showGallery = gallery?.images || photoGallery;

  return (
    <>
      {showBanner && (
        <ErrorBoundaryWithAnalytics name="banner">
          <Banner text={banner.text} image={banner.image} />
        </ErrorBoundaryWithAnalytics>
      )}
      {/* <ErrorBoundaryWithAnalytics name="breadcrumbs">
        <Breadcrumbs
          breadcrumbs={directoryParents || []}
          separator="/"
          className="container"
        />
      </ErrorBoundaryWithAnalytics> */}
      <ErrorBoundaryWithAnalytics name="hero">
        <Hero
          name={name}
          cta1={hero?.cta1}
          cta2={hero?.cta2}
          address={address}
          background={hero?.background}
          hours={hours}
          entityId={id}
          profile={data.document}
        />
      </ErrorBoundaryWithAnalytics>
      <ErrorBoundaryWithAnalytics name="core">
        <Core profile={data.document} />
      </ErrorBoundaryWithAnalytics>

      {showAbout && (
        <ErrorBoundaryWithAnalytics name="about">
          <About
            title={about.title}
            image={about.image}
            description={about.description || description}
            cta={about.cta}
          />
        </ErrorBoundaryWithAnalytics>
      )}
      {showGallery && (
        <ErrorBoundaryWithAnalytics name="gallery">
          <Gallery
            title={gallery?.title}
            images={gallery?.images || photoGallery}
          />
        </ErrorBoundaryWithAnalytics>
      )}
      <LazyLoadWrapper>
        {/* <ErrorBoundaryWithAnalytics name="nearby">
          <Nearby
            title={nearby?.title}
            linkToLocator={nearby?.linkToLocator}
            buttonText={nearby?.cta?.label}
            buttonLink={nearby?.cta?.link}
            coordinate={yextDisplayCoordinate}
            id={id}
          />
        </ErrorBoundaryWithAnalytics> */}
      </LazyLoadWrapper>
    </>
  );
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct stream document defined by `config`.
 *
 * There are a bunch of custom components being used from the src/components folder. These are
 * an example of how you could create your own. You can set up your folder structure for custom
 * components any way you'd like as long as it lives in the src folder (though you should not put
 * them in the src/templates folder as this is specific for true template files).
 */
const Entity: Template<TemplateRenderProps<LocationProfile>> = (data) => {
  return (
    <Main data={data}>
      <EntityLayout data={data} />
    </Main>
  );
};

export default Entity;
