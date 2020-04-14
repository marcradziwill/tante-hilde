/* eslint-disable complexity */
import React from 'react';
import { css } from '@emotion/core';
import FullWidthBox from 'components/FullWidthBox';
import SEO from 'components/SEO/SEO';
import ExternalLink from 'components/ExternalLink';
import StyledBox from 'components/StyledBox';
import SocialShare from 'components/SocialShare';
import Video from 'components/Video';

function Company({ pageContext: { company } }) {
  company.Beschreibung = company.Beschreibung.replace(/\\n/g, '<br />');
  company.Lieferung___Bezahlung = company.Lieferung___Bezahlung.replace(
    /\\n/g,
    '<br />',
  );

  if (company.Webshop_Link.length > 0) {
    if (!company.Webshop_Link.startsWith('http')) {
      company.Webshop_Link = `https://${company.Webshop_Link}`;
    }
  }
  if (company.Webseite.length > 0) {
    if (!company.Webseite.startsWith('http')) {
      company.Webseite = `https://${company.Webseite}`;
    }
  }
  let videoId;
  if (company.Video_Link.includes('vimeo')) {
    videoId = company.Video_Link.split('/')[3];
    company.VideoType = 'vimeo';
  }
  if (company.Video_Link.includes('.mp4')) {
    company.VideoType = 'local';
  }
  if (company.Video_Link.includes('youtu')) {
    if (company.Video_Link.includes('channel')) {
      company.VideoType = 'channel';
    } else {
      company.VideoType = 'youtube';
    }
  }
  if (company.Video_Link.includes('insta')) {
    company.VideoType = 'instagram';
  }
  if (!company.VideoType && company.Video_Link.length > 0) {
    company.VideoType = 'iframe';
  }

  const youtube_parser = (url) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  };

  return (
    <FullWidthBox
      css={css`
        // margin-top: 100px;
      `}
    >
      <SEO
        title={company.Name_Firma}
        description={
          company.Beschreibung
            ? company.Beschreibung
            : `Tante Hilde Firmenseite - Firma: ${company.Name_Firma}`
        }
        image={company.Logo_Link}
        headerImage={company.Logo_Link}
        follow="index, follow"
      />
      <FullWidthBox>
        <div
          css={css`
            display: flex;
            justify-content: center;
            text-align: center;
            align-items: center;
            flex-direction: column;
          `}
        >
          <h1>{company.Name_Firma}</h1>
          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
            `}
          >
            {/* <Image filename="tantehilde_logo.png" alt="" title="" /> */}
            <img
              css={css`
                width: 50%;
              `}
              src={company.Logo_Link}
              alt=""
            />
          </div>
          <StyledBox direction="row" className="align-c">
            {company.Webseite && (
              <StyledBox pad="small">
                <ExternalLink
                  css={css`
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.5s;
                  `}
                  data-typecat="Icon"
                  data-typeaction="Click"
                  data-typename={` Webseite`}
                  target="_blank"
                  href={company.Webseite}
                >
                  <svg
                    aria-label="Globe"
                    viewBox="0 0 24 24"
                    css={css`
                      display: inline-block;
                      -webkit-flex: 0 0 auto;
                      -ms-flex: 0 0 auto;
                      flex: 0 0 auto;
                      width: 24px;
                      height: 24px;
                      fill: #555;
                      stroke: #555;
                      path {
                        stroke-width: 2px;
                      }
                      :hover {
                        transform: scale(1.2);
                        svg,
                        path {
                          fill: #73b471;
                        }
                      }
                    `}
                  >
                    <path
                      fill="none"
                      stroke="#555"
                      strokeWidth="2"
                      d="M2,8 C2,8 5.5,9 7,10 C8.5,11 7.56437103,12.4191614 8,13 C8.43562897,13.5808386 10,12 10,15 C10,18 13,16 13,19 C13,22 15.5,21.5 16,20 C16.5,18.5 18.2333023,16.8664183 18,15 C17.7666977,13.1335817 17,12 15,12 C13,12 11.5,11.5 11,10 C10.5,8.5 14,8 13,5 C12,2 13,1 13,1 M23,12 C23,18.075 18.075,23 12,23 C5.925,23 1,18.075 1,12 C1,5.925 5.925,1 12,1 C18.075,1 23,5.925 23,12 L23,12 Z"
                    />
                  </svg>
                </ExternalLink>
              </StyledBox>
            )}
            {company.Instagram_Link && (
              <StyledBox pad="small">
                <ExternalLink
                  css={css`
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.5s;
                  `}
                  data-typecat="Icon"
                  data-typeaction="Click"
                  data-typename={` Instagram`}
                  target="_blank"
                  href={company.Instagram_Link}
                >
                  <svg
                    aria-label="Instagram"
                    viewBox="0 0 24 24"
                    css={css`
                      display: inline-block;
                      -webkit-flex: 0 0 auto;
                      -ms-flex: 0 0 auto;
                      flex: 0 0 auto;
                      width: 24px;
                      height: 24px;
                      fill: #555;
                      stroke: #555;
                      :hover {
                        transform: scale(1.2);
                        svg,
                        path {
                          fill: #73b471;
                        }
                      }
                    `}
                  >
                    <path d="M17.3183118,0.0772036939 C18.5358869,0.132773211 19.3775594,0.311686093 20.156489,0.614412318 C20.9357539,0.917263935 21.5259307,1.30117806 22.1124276,1.88767349 C22.6988355,2.47414659 23.0827129,3.06422396 23.3856819,3.84361655 C23.688357,4.62263666 23.8672302,5.46418415 23.9227984,6.68172489 C23.9916356,8.19170553 24,8.72394829 24,11.9999742 C24,15.2760524 23.9916355,15.808302 23.9227954,17.3182896 C23.8672306,18.5358038 23.6883589,19.3773584 23.3855877,20.1566258 C23.0826716,20.9358162 22.6987642,21.5259396 22.1124276,22.1122749 C21.5259871,22.6987804 20.9357958,23.0827198 20.1563742,23.3856323 C19.3772192,23.6883583 18.5357324,23.8672318 17.3183209,23.9227442 C15.8086874,23.9916325 15.2765626,24 12,24 C8.72343739,24 8.19131258,23.9916325 6.68172382,23.9227463 C5.46426077,23.8672314 4.62270711,23.6883498 3.84342369,23.3855738 C3.0641689,23.0827004 2.47399369,22.6987612 1.88762592,22.1123283 C1.30117312,21.525877 0.91721975,20.9357071 0.614318116,20.1563835 C0.311643016,19.3773633 0.132769821,18.5358159 0.0772038909,17.3183251 C0.0083529426,15.8092887 0,15.2774634 0,11.9999742 C0,8.7225328 0.00835296697,8.19071076 0.0772047368,6.68165632 C0.132769821,5.46418415 0.311643016,4.62263666 0.614362729,3.84350174 C0.91719061,3.06430165 1.30113536,2.4741608 1.88757245,1.88772514 C2.47399369,1.30123879 3.0641689,0.917299613 3.84345255,0.614414972 C4.62236201,0.311696581 5.46409415,0.132773979 6.68163888,0.0772035898 C8.19074867,0.00835221992 8.72252573,0 12,0 C15.2774788,0 15.8092594,0.00835235053 17.3183118,0.0772036939 Z M12,2.66666667 C8.75959504,2.66666667 8.26400713,2.67445049 6.80319929,2.74109814 C5.87614637,2.78341009 5.31952221,2.90172878 4.80947575,3.09995521 C4.37397765,3.26922052 4.09725505,3.44924273 3.77324172,3.77329203 C3.44916209,4.09737087 3.26913181,4.37408574 3.09996253,4.80937168 C2.90169965,5.31965737 2.78340891,5.87618164 2.74109927,6.80321713 C2.67445122,8.26397158 2.66666667,8.75960374 2.66666667,11.9999742 C2.66666667,15.2403924 2.67445121,15.7360281 2.74109842,17.1967643 C2.78340891,18.1238184 2.90169965,18.6803426 3.09990404,19.1904778 C3.26914133,19.6259017 3.44919889,19.9026659 3.77329519,20.2267614 C4.09725505,20.5507573 4.37397765,20.7307795 4.80932525,20.8999863 C5.31971515,21.0982887 5.87621193,21.2165784 6.80323907,21.2588497 C8.26460439,21.3255353 8.76051223,21.3333333 12,21.3333333 C15.2394878,21.3333333 15.7353956,21.3255353 17.1968056,21.2588476 C18.123775,21.216579 18.6802056,21.0982995 19.1905083,20.9000309 C19.6260288,20.7307713 19.9027426,20.5507596 20.2267583,20.226708 C20.5507492,19.9027179 20.7308046,19.6259456 20.9000375,19.1906283 C21.0983009,18.6803412 21.2165908,18.1238118 21.2588986,17.196779 C21.3255376,15.7350718 21.3333333,15.2390126 21.3333333,11.9999742 C21.3333333,8.76098665 21.3255376,8.26493375 21.2589016,6.80323567 C21.2165911,5.87618164 21.0983004,5.31965737 20.9001178,4.80957831 C20.7308131,4.37403932 20.550774,4.09729207 20.2267583,3.77324038 C19.9027658,3.44924868 19.6260264,3.26922777 19.1905015,3.09996643 C18.6803988,2.90171817 18.1238378,2.78341062 17.1967608,2.74109868 C15.7359966,2.67445057 15.2404012,2.66666667 12,2.66666667 Z M12,18.2222222 C8.56356156,18.2222222 5.77777778,15.4364384 5.77777778,12 C5.77777778,8.56356156 8.56356156,5.77777778 12,5.77777778 C15.4364384,5.77777778 18.2222222,8.56356156 18.2222222,12 C18.2222222,15.4364384 15.4364384,18.2222222 12,18.2222222 Z M12,15.5555556 C13.9636791,15.5555556 15.5555556,13.9636791 15.5555556,12 C15.5555556,10.0363209 13.9636791,8.44444444 12,8.44444444 C10.0363209,8.44444444 8.44444444,10.0363209 8.44444444,12 C8.44444444,13.9636791 10.0363209,15.5555556 12,15.5555556 Z M18.2222222,7.11111111 C17.4858426,7.11111111 16.8888889,6.51415744 16.8888889,5.77777778 C16.8888889,5.04139811 17.4858426,4.44444444 18.2222222,4.44444444 C18.9586019,4.44444444 19.5555556,5.04139811 19.5555556,5.77777778 C19.5555556,6.51415744 18.9586019,7.11111111 18.2222222,7.11111111 Z" />
                  </svg>
                </ExternalLink>
              </StyledBox>
            )}
            {company.Email && (
              <StyledBox pad="small">
                <ExternalLink
                  css={css`
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.5s;
                  `}
                  data-typecat="Icon"
                  data-typeaction="Click"
                  data-typename={` Email`}
                  href={`mailto:${company.Email}`}
                  target="_blank"
                >
                  <svg
                    aria-label="MailOption"
                    viewBox="0 0 24 24"
                    css={css`
                      display: inline-block;
                      -webkit-flex: 0 0 auto;
                      -ms-flex: 0 0 auto;
                      flex: 0 0 auto;
                      width: 24px;
                      height: 24px;
                      fill: #555;
                      stroke: #555;
                      :hover {
                        transform: scale(1.2);
                        svg,
                        path {
                          fill: #73b471;
                        }
                      }
                    `}
                  >
                    <path
                      fill="none"
                      stroke="#555"
                      strokeWidth="2"
                      d="M1,4 L23,4 L23,20 L1,20 L1,4 Z M1,5 L12,13.5 L23,5"
                    />
                  </svg>
                </ExternalLink>
              </StyledBox>
            )}
            {company.Facebook_Link && (
              <StyledBox pad="small">
                <ExternalLink
                  css={css`
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.5s;
                  `}
                  data-typecat="Icon"
                  data-typeaction="Click"
                  data-typename={` Email`}
                  href={company.Facebook_Link}
                  target="_blank"
                >
                  <svg
                    aria-label="Facebook"
                    viewBox="0 0 24 24"
                    css={css`
                      display: inline-block;
                      -webkit-flex: 0 0 auto;
                      -ms-flex: 0 0 auto;
                      flex: 0 0 auto;
                      width: 24px;
                      height: 24px;
                      fill: #555;
                      stroke: #555;
                      :hover {
                        transform: scale(1.2);
                        svg,
                        path {
                          fill: #73b471;
                        }
                      }
                    `}
                  >
                    <path
                      fillRule="evenodd"
                      d="M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,23.00025 C0,23.55225 0.44775,24 1.0005,24 L12.75,24 L12.75,15 L9.75,15 L9.75,11.25 L12.75,11.25 L12.75,8.25 C12.75,5.15025 14.71275,3.62475 17.478,3.62475 C18.8025,3.62475 19.941,3.72375 20.2725,3.76725 L20.2725,7.00725 L18.35475,7.008 C16.851,7.008 16.5,7.72275 16.5,8.77125 L16.5,11.25 L20.25,11.25 L19.5,15 L16.5,15 L16.56,24 L23.00025,24 C23.55225,24 24,23.55225 24,23.00025 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0"
                    />
                  </svg>
                </ExternalLink>
              </StyledBox>
            )}
            {company.Telefon && (
              <StyledBox pad="small">
                <ExternalLink
                  css={css`
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.5s;
                  `}
                  data-typecat="Icon"
                  data-typeaction="Click"
                  data-typename={` Telefon`}
                  href={`tel:${company.Telefon}`}
                  target="_blank"
                >
                  <svg
                    aria-label="Phone"
                    css={css`
                      display: inline-block;
                      -webkit-flex: 0 0 auto;
                      -ms-flex: 0 0 auto;
                      flex: 0 0 auto;
                      width: 24px;
                      height: 24px;
                      fill: #555;
                      stroke: #555;
                      :hover {
                        transform: scale(1.2);
                        svg,
                        path {
                          fill: #73b471;
                        }
                      }
                    `}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#555"
                      strokeWidth="2"
                      d="M6.375,2 C5,2 3,3.5 2.5,4.5 C1.78539513,5.92920973 1.9033374,6.49067969 2.375,8 C3,10 4.83244154,13.545116 7.375,16 C11,19.5 14.375,21 15.875,21.5 C17.375,22 19,21.5 20,20.5 C21,19.5 22,18.5 20.875,17 C20.077805,15.9370734 18.9164827,14.7082413 17.5,14 C16.2120164,13.3560082 15.444427,13.5904184 15,14.5 C14.7543142,15.0028302 14.6780041,15.9659877 14.5,16.5 C14.2754227,17.173732 13.375,17 12.375,16.5 C11.4176235,16.0213117 9,14 7,11 C5.76086515,9.14129772 7.74150655,9.12924672 9,8.5 C10,8 10.3099909,6.84998476 9.5,5.5 C8,3 7.5,2 6.375,2 Z"
                    />
                  </svg>
                </ExternalLink>
              </StyledBox>
            )}
            {company.Webshop_Link && (
              <StyledBox pad="small">
                <ExternalLink
                  css={css`
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.5s;
                  `}
                  data-typecat="Icon"
                  data-typeaction="Click"
                  href={company.Webshop_Link}
                  target="_blank"
                >
                  <svg
                    aria-label="Cart"
                    viewBox="0 0 24 24"
                    css={css`
                      display: inline-block;
                      -webkit-flex: 0 0 auto;
                      -ms-flex: 0 0 auto;
                      flex: 0 0 auto;
                      width: 24px;
                      height: 24px;
                      fill: #555;
                      stroke: #555;
                      :hover {
                        transform: scale(1.2);
                        svg,
                        path {
                          fill: #73b471;
                        }
                      }
                    `}
                  >
                    <path
                      fill="none"
                      stroke="#555"
                      strokeWidth="2"
                      d="M5,5 L22,5 L20,14 L7,14 L4,2 L0,2 M7,14 L8,18 L21,18 M19,23 C18.4475,23 18,22.5525 18,22 C18,21.4475 18.4475,21 19,21 C19.5525,21 20,21.4475 20,22 C20,22.5525 19.5525,23 19,23 Z M9,23 C8.4475,23 8,22.5525 8,22 C8,21.4475 8.4475,21 9,21 C9.5525,21 10,21.4475 10,22 C10,22.5525 9.5525,23 9,23 Z"
                    />
                  </svg>
                </ExternalLink>
              </StyledBox>
            )}
          </StyledBox>
          <StyledBox>
            <ExternalLink
              css={css`
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 10px;
                color: #73b471;
              `}
              target="_blank"
              href={`https://maps.google.com/?q=${company.Strasse__Hausnummer}-${company.PLZ__Ort}`}
            >
              {company.Strasse__Hausnummer},{` `}
              {company.PLZ__Ort}
            </ExternalLink>
          </StyledBox>
        </div>
      </FullWidthBox>
      <FullWidthBox>
        <div>
          <h2>Details</h2>
          {company.Ansprechpartner && (
            <>
              <h3>Ansprechpartner</h3>
              <p>{company.Ansprechpartner}</p>
            </>
          )}
          {company.Beschreibung && (
            <>
              <h3>Beschreibung</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: company.Beschreibung.split('\n').join('<br />'),
                }}
              />
            </>
          )}
          {company.Webseite && (
            <>
              <h3>Webseite</h3>
              <p>
                <ExternalLink target="_blank" href={company.Webseite}>
                  {company.Webseite}
                </ExternalLink>
              </p>
            </>
          )}
          {company.Bestellung__ber_ && (
            <>
              <h3>Bestellung per</h3>
              <p>{company.Bestellung__ber_}</p>
            </>
          )}
          {company.Telefon && (
            <>
              <h3>Telefon</h3>
              <p>
                <ExternalLink
                  href={`tel:${company.Telefon.replace(/\s/g, '')}`}
                >
                  {company.Telefon}
                </ExternalLink>
              </p>
            </>
          )}
          {company.Mobile && (
            <>
              <h3>Mobil</h3>
              <p>
                <ExternalLink href={`tel:${company.Mobile.replace(/\s/g, '')}`}>
                  {company.Mobile}
                </ExternalLink>
              </p>
            </>
          )}
          {company.Email && (
            <>
              <h3>Email</h3>
              <p>
                <ExternalLink href={`mailto:${company.Email}`}>
                  {company.Email}
                </ExternalLink>
              </p>
            </>
          )}
          <h3>Branche</h3>
          <p>{company.Branch}</p>
          {company.Lieferung___Bezahlung && (
            <>
              <h3>Lieferung / Bezahlung</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: company.Lieferung___Bezahlung.split('\n').join(
                    '<br />',
                  ),
                }}
              />
            </>
          )}
          {company.Webshop_Link && (
            <>
              <h3>Webshop</h3>
              <p>
                <ExternalLink target="_blank" href={company.Webshop_Link}>
                  {company.Webshop_Link}
                </ExternalLink>
              </p>
            </>
          )}
          {company.PDF_Link && (
            <>
              <h3>Informationen</h3>
              <p>
                <ExternalLink target="_blank" href={company.PDF_Link}>
                  Informationen
                </ExternalLink>
              </p>
            </>
          )}
          {company.Video_Link && (
            <>
              {/* <h3>Video</h3> */}
              <div
                css={css`
                  height: ${company.VideoType === 'channel' ? '' : '500px'};
                `}
              >
                {company.VideoType === 'channel' && (
                  <>
                    <h3>Video</h3>
                    <ExternalLink target="_blank" href={company.Video_Link}>
                      Video Link
                    </ExternalLink>
                  </>
                )}
                {company.VideoType === 'vimeo' && (
                  <>
                    <h3>Video</h3>
                    <p
                      css={css`
                        height: 500px;
                      `}
                    >
                      <iframe
                        width="100%"
                        height="500px"
                        css={css`
                          height: 500px;
                        `}
                        title="Video"
                        src={`https://player.vimeo.com/video/${videoId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </p>
                  </>
                )}
                {company.VideoType === 'youtube' && (
                  <iframe
                    width="100%"
                    height="500px"
                    css={css`
                      height: 500px;
                    `}
                    title="Video"
                    src={`https://www.youtube-nocookie.com/embed/${youtube_parser(
                      company.Video_Link,
                    )}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
                {company.VideoType === 'iframe' && (
                  <iframe
                    width="100%"
                    height="500px"
                    css={css`
                      height: 500px;
                    `}
                    title="Video"
                    src={company.Video_Link}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
                {company.VideoType === 'instagram' && (
                  <ExternalLink target="_blank" href={company.Video_Link}>
                    Video Link
                  </ExternalLink>
                )}

                {company.VideoType === 'local' && (
                  <Video filepath={company.Video_Link} />
                )}
              </div>
            </>
          )}

          {/* */}
          <SocialShare />
          <StyledBox>
            <ExternalLink
              css={css`
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 10px;
                color: #73b471;
              `}
              target="_blank"
              href="mailto:tantehildeallgaeu@gmail.com"
            >
              Bei Fragen, Problemen oder Änderungen eurer Daten, meldet euch
              gerne bei Tante Hilde unter tantehildeallgaeu@gmail.com.
            </ExternalLink>
          </StyledBox>
        </div>
      </FullWidthBox>
    </FullWidthBox>
  );
}
export default Company;
