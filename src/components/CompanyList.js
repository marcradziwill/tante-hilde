import React from 'react';
import { Link } from 'gatsby';
import ResponsiveGrid from 'components/Layouts/ResponsiveGrid';
import { css } from '@emotion/core';
import Img from 'gatsby-image/withIEPolyfill';

const CompanyList = (props) => {
  return (
    <ResponsiveGrid
      templatecolumns="33% 33% 33%"
      css={css`
        grid-gutter: 5px;
      `}
    >
      {props.companies.map((company, index) => {
        return (
          <Link to={`/unternehmen/${company.fields.pageUrl}/`} key={index}>
            <div
              css={css`
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                margin-top: 50px;
              `}
            >
              {company.image ? (
                <Img
                  css={css`
                    width: 150px !important;
                    height: 150px !important;
                    border-radius: 50%;
                    border: 1px solid #73b471;
                    object-fit: contain;
                  `}
                  objectFit="contain"
                  fixed={company.image.node.childImageSharp.fixed}
                  title={company.Name_Firma}
                  alt={`Das Logo von ${company.Name_Firma}`}
                />
              ) : (
                <img
                  css={css`
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    border: 1px solid #73b471;
                    object-fit: contain;
                  `}
                  alt="2"
                  src={`${
                    company.Logo_Link ? company.Logo_Link : '/Dummybild.png'
                  }`}
                />
              )}

              <div
                css={css`
                  display: flex;
                  text-align: center;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                `}
              >
                <h5>{company.Name_Firma}</h5>
              </div>
            </div>
          </Link>
        );
      })}
    </ResponsiveGrid>
  );
};
export default CompanyList;
