import React from 'react'
// import {graphql, navigate} from 'gatsby'
// import loadable from '@loadable/component'
// import SEO from 'components/SEO/SEO'
// import PageHeader from 'components/PageHeader'
// import StyledButton from 'components/StyledButton'
import FullWidthBox from 'components/FullWidthBox'
// import TopicTeaser from 'components/Teaser/TopicTeaser'
// import Feed from 'components/Feed'
// import ServiceTeaser from 'components/Teaser/ServiceTeaser'

// const Teaser = loadable(() => import('components/Teaser/Teaser'))
// const CourseList = loadable(() => import('components/CourseList'))
// const NewsletterBox = loadable(() => import('components/NewsletterBox'))

const Index = () => {
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
          {/* <PageHeader
            title={page.htmlTitle}
            images={page.heroImages}
            widthhero="50%"
            vheight="100vh"
          >
            <h1
              className="white"
              dangerouslySetInnerHTML={{ __html: page.htmlTitle }}
            />
            <h2
              className="small white"
              dangerouslySetInnerHTML={{ __html: page.htmlSubTitle }}
            />
            <StyledButton
              data-typename="Header CTA"
              data-typecat="Button"
              data-typeaction="Click"
              onClick={navigateToContact}
            >
              {page.headerButton}
            </StyledButton>
          </PageHeader> */}
          <FullWidthBox>
            {/* <TopicTeaser content={hintTeaser} color="green" /> */}
          </FullWidthBox>
        </article>
      </div>
    </>
  )
}
export default Index
