import React from 'react';
// import SEO from 'components/SEO/SEO'
import PageHeader from 'components/PageHeader';
import FullWidthBox from 'components/FullWidthBox';

const NotFoundPage = () => {
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
            vheight="50vh"
          >
            <h1 className="white">404</h1>
            <h2 className="small white">Kauf lokal</h2>
            {/* <StyledButton
              data-typename="Header CTA"
              data-typecat="Button"
              data-typeaction="Click"
              onClick={navigateToContact}
            >
              {page.headerButton} */}
            {/* </StyledButton> */}
          </PageHeader>
          <FullWidthBox>
            {/* <TopicTeaser content={hintTeaser} color="green" /> */}
          </FullWidthBox>
        </article>
      </div>
    </>
  );
};
export default NotFoundPage;
