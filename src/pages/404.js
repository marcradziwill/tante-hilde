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
          <FullWidthBox>
            <h1>404</h1>
            <h2 className="small">Kauf lokal</h2>
          </FullWidthBox>
        </article>
      </div>
    </>
  );
};
export default NotFoundPage;
