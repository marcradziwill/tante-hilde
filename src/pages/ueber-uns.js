import React from 'react';
// import SEO from 'components/SEO/SEO'
import PageHeader from 'components/PageHeader';
import FullWidthBox from 'components/FullWidthBox';

const AboutUs = () => {
  return (
    <>
      {/* <SEO
        title={page.seo.title}
        description={page.seo.description}
        image={page.heroImages[0]}
        pathname={location.pathname}
        headerImage={page.heroImages[0]}
        follow={page.seo.follow}
      /> */}
      <div>
        <article>
          <PageHeader
            // title={page.htmlTitle}
            image={{
              src: 'Schaufenster-von-seine-Laden-tagsueber.jpeg',
              alt: 'Schaufenster von einem Laden tagsueber',
              title: 'Schaufenster von einem Laden tagsueber',
            }}
            // https://unsplash.com/photos/xfPpB7Pe8NA
            widthhero="50%"
            vheight="50vh"
          >
            <h1 className="white">Wir f&uuml;r das Allg&auml;u</h1>
            <h2 className="small white">Kauf lokal</h2>
          </PageHeader>
          <FullWidthBox>
            {/* <TopicTeaser content={hintTeaser} color="green" /> */}
          </FullWidthBox>
        </article>
      </div>
    </>
  );
};
export default AboutUs;
