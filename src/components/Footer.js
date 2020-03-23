// import React from 'react'
// import {useStaticQuery, graphql} from 'gatsby'
// import Img from 'gatsby-image/withIEPolyfill'
// import {css} from '@emotion/core'
// import FullWidthBox from 'components/FullWidthBox'
// import ResponsiveGrid from 'components/Layouts/ResponsiveGrid'
// import ExternalLink from 'components/ExternalLink'
// import Newsletter from 'components/Newsletter'
// import CookieLayer from 'components/CookieLayer'
// import SocialShare from 'components/SocialShare'
// import SocialTeaser from 'components/SocialTeaser'
// import GatsbyLink from 'components/GatsbyLink'
// import StyledBox from 'components/StyledBox'
// import {useLocalContext} from 'components/LocalContext'
// import {translateUrl, scrollToAnchor} from 'utils/helpers'

// const scrollTop = () => {
//   scrollToAnchor('___gatsby')
// }

// const Footer = ({location}) => {
//   const data = useStaticQuery(graphql`
//     query SiteFooterQuery {
//       site {
//         siteMetadata {
//           organization {
//             email
//             address {
//               streetNumber
//               zipCity
//             }
//           }
//           social {
//             twitter
//             linkedin
//             github
//             googlemaps
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <footer
//       css={css`
//         a {
//           color: unset;
//         }
//         ul {
//           list-style: none;
//         }
//       `}
//     >
//       <ExternalLink
//         onClick={scrollTop}
//         rel="scrolltop"
//         css={css`
//           cursor: pointer;
//           position: fixed;
//           bottom: 10%;
//           right: 5%;
//           padding: 10px;
//           width: 55px;
//           background: rgb(108, 184, 141);
//           border-radius: 30px;
//           height: 55px;
//         `}
//       >
//         {/* <Up style={{ marginLeft: '3px', marginTop: '3px' }} /> */}
//         <svg aria-label="Up" viewBox="0 0 24 24">
//           <polyline
//             fill="none"
//             stroke="#555"
//             strokeWidth="2"
//             points="7.086 1.174 17.086 11.174 7.086 21.174"
//             transform="rotate(-89 12.086 11.174)"
//           />
//         </svg>
//       </ExternalLink>
//       <FullWidthBox pad="medium" background="white">
//         <SocialShare location={location} />
//       </FullWidthBox>
//       <Newsletter />
//       <FullWidthBox justify="center" pad="large" background="#C8EBD7">
//         <ResponsiveGrid templatecolumns="33% 33% 33%">
//           <StyledBox
//             css={css`
//               margin: 0;
//               padding: 0;
//               list-style: none;
//               li {
//                 display: block;
//                 font-weight: 400;
//               }
//               margin-top: 20px;
//               -webkit-align-items: center;
//               -webkit-box-align: center;
//               -ms-flex-align: center;
//               align-items: center;
//               @media only screen and (min-width: 640px) {
//                 margin-top: 0;
//                 -webkit-align-items: flex-start;
//                 -webkit-box-align: flex-start;
//                 -ms-flex-align: flex-start;
//                 align-items: flex-start;
//               }
//             `}
//           >
//             <span className="text xlarge">marc radziwill.</span>
//             <ul
//               css={css`
//                 margin: 0;
//                 padding: 0;
//               `}
//             >
//               <li
//                 css={css`
//                   margin-top: 5px;
//                 `}
//               >
//                 <ExternalLink
//                   data-typecat="Link"
//                   data-typeaction="Click"
//                   data-typename="Footer Text-Adresse"
//                   href={data.site.siteMetadata.social.googlemaps}
//                   target="__blank"
//                 >
//                   {data.site.siteMetadata.organization.address.streetNumber}
//                 </ExternalLink>
//               </li>
//               <li
//                 css={css`
//                   margin-top: 5px;
//                 `}
//               >
//                 <ExternalLink
//                   href={data.site.siteMetadata.social.googlemaps}
//                   target="__blank"
//                 >
//                   {data.site.siteMetadata.organization.address.zipCity}
//                 </ExternalLink>
//               </li>
//               <li
//                 css={css`
//                   margin-top: 5px;
//                 `}
//               >
//                 <ExternalLink
//                   data-typecat="Link"
//                   data-typeaction="Click"
//                   data-typename="Footer E-Mail-Adresse"
//                   href="mailto:hallo@marcradziwill.de"
//                 >
//                   {data.site.siteMetadata.organization.email}
//                 </ExternalLink>
//               </li>
//             </ul>
//           </StyledBox>
//           <StyledBox
//             css={css`
//               margin: 0;
//               padding: 0;
//               list-style: none;
//               li {
//                 display: block;
//                 font-weight: 400;
//               }
//               -webkit-align-items: center;
//               -webkit-box-align: center;
//               -ms-flex-align: center;
//               align-items: center;
//             `}
//             direction="column"
//           >
//             <GatsbyLink to="home" locale={locale}>
//               <Img fixed={data.logo.childImageSharp.fixed} />
//             </GatsbyLink>
//           </StyledBox>
//           <StyledBox
//             css={css`
//               margin: 0;
//               padding: 0;
//               list-style: none;
//               li {
//                 display: block;
//                 font-weight: 400;
//               }
//               margin-top: 20px;
//               -webkit-align-items: center;
//               -webkit-box-align: center;
//               -ms-flex-align: center;
//               align-items: center;
//               @media only screen and (min-width: 640px) {
//                 margin-top: 0;
//                 -webkit-align-items: flex-start;
//                 -webkit-box-align: flex-start;
//                 -ms-flex-align: flex-start;
//                 align-items: flex-start;
//               }
//             `}
//           >
//             <h5>Follow me</h5>
//             <SocialTeaser parent="Footer" />
//             <h5 level="5" margin={{top: 'medium', bottom: 'medium'}}>
//               Explore
//             </h5>
//             <ul
//               css={css`
//                 margin: 0;
//                 padding: 0;
//                 list-style: none;
//                 li {
//                   display: block;
//                   font-weight: 400;
//                 }
//               `}
//             >
//               <li>
//                 <GatsbyLink locale={locale} to="faq">
//                   &gt; FAQ
//                 </GatsbyLink>
//               </li>
//               <li>
//                 {' '}
//                 <GatsbyLink locale={locale} to="aboutme">
//                   &gt; About
//                 </GatsbyLink>
//               </li>
//             </ul>
//           </StyledBox>
//         </ResponsiveGrid>
//       </FullWidthBox>
//       <StyledBox
//         style={{color: '#ffffff'}}
//         background="brand"
//         pad={{
//           left: 'large',
//           right: 'large',
//           top: 'none',
//           bottom: 'none',
//         }}
//       >
//         <FullWidthBox pad="none">
//           <ResponsiveGrid templatecolumns="33% 33% 33%">
//             <StyledBox
//               css={css`
//                 margin: 0;
//                 padding: 0;
//                 list-style: none;
//                 li {
//                   display: block;
//                   font-weight: 400;
//                 }
//                 margin-top: 20px;
//                 -webkit-align-items: center;
//                 -webkit-box-align: center;
//                 -ms-flex-align: center;
//                 align-items: center;
//                 @media only screen and (min-width: 640px) {
//                   margin-top: 0;
//                   -webkit-align-items: flex-start;
//                   -webkit-box-align: flex-start;
//                   -ms-flex-align: flex-start;
//                   align-items: flex-start;
//                 }
//               `}
//             >
//               <span className="text medium" style={{fontWeight: 'bold'}}>
//                 &#169; marc radziwill. {new Date().getFullYear()}
//               </span>
//             </StyledBox>
//             <StyledBox className="align-c justify-c">
//               <div
//                 style={{
//                   fontSize: '12px',
//                   fontWeight: '700',
//                 }}
//               >
//                 made with
//                 <svg
//                   css={css`
//                     margin: 0 5px;
//                     display: inline-block;
//                     -webkit-flex: 0 0 auto;
//                     -ms-flex: 0 0 auto;
//                     -webkit-flex: 0 0 auto;
//                     -ms-flex: 0 0 auto;
//                     flex: 0 0 auto;
//                     width: 12px;
//                     height: 12px;
//                     fill: #6cb88d;
//                     stroke: #6cb88d;
//                   `}
//                   aria-label="Favorite"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeWidth="2"
//                     d="M1,8.4 C1,4 4.5,3 6.5,3 C9,3 11,5 12,6.5 C13,5 15,3 17.5,3 C19.5,3 23,4 23,8.4 C23,15 12,21 12,21 C12,21 1,15 1,8.4 Z"
//                   />
//                 </svg>
//                 from Kempten (Allg&auml;u)
//               </div>
//             </StyledBox>
//             <StyledBox
//               css={css`
//                 margin: 0;
//                 padding: 0;
//                 list-style: none;
//                 li {
//                   display: block;
//                   font-weight: 400;
//                 }
//                 margin-top: 20px;
//                 -webkit-align-items: center;
//                 -webkit-box-align: center;
//                 -ms-flex-align: center;
//                 align-items: center;
//                 @media only screen and (min-width: 640px) {
//                   margin-top: 0;
//                   -webkit-align-items: flex-end;
//                   -webkit-box-align: flex-end;
//                   -ms-flex-align: flex-end;
//                   align-items: flex-end;
//                 }
//               `}
//             >
//               <ul
//                 css={css`
//                   margin: 0;
//                   padding: 0;
//                   list-style: none;
//                   li {
//                     display: block;
//                     font-weight: 400;
//                   }
//                 `}
//               >
//                 {data.site.siteMetadata.metaMenu.map((menuItem, index) => {
//                   return (
//                     <li
//                       style={{
//                         display: 'inline-block',
//                         marginLeft: index > 0 ? '20px' : '0',
//                       }}
//                       key={index}
//                     >
//                       <span className="text">
//                         <GatsbyLink locale={locale} to={menuItem.name}>
//                           {translateUrl(menuItem.name, locale).title}
//                         </GatsbyLink>
//                       </span>
//                     </li>
//                   )
//                 })}
//               </ul>{' '}
//             </StyledBox>
//           </ResponsiveGrid>
//         </FullWidthBox>
//       </StyledBox>
//       <CookieLayer />
//     </footer>
//   )
// }
// export default React.memo(Footer)
