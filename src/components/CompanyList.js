import React from 'react';
import { Link } from 'gatsby';
import ResponsiveGrid from 'components/Layouts/ResponsiveGrid';
import { css } from '@emotion/core';

const CompanyList = (props) => {
  return (
    <>
      <div
        css={css`
          text-align: center;
          width: 100%;
        `}
      >
        <h2
          css={css`
            max-width: 100%;
          `}
        >
          {props.companies.length} Allgäuer Unternehmen und Dienstleister
        </h2>
      </div>
      <ResponsiveGrid
        templatecolumns="33% 33% 33%"
        css={css`
          grid-gutter: 5px;
        `}
      >
        {props.companies.map((company, index) => {
          return (
            <Link
              to={`/unternehmen/${company.node.fields.pageUrl}/`}
              key={index}
            >
              <div
                css={css`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-direction: column;
                  margin-top: 50px;
                `}
              >
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
                    company.node.Logo_Link
                      ? company.node.Logo_Link
                      : '/Dummybild.png'
                  }`}
                />
                <div
                  css={css`
                    display: flex;
                    text-align: center;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                  `}
                >
                  <h5>{company.node.Name_Firma}</h5>
                </div>
              </div>
            </Link>
          );
        })}
      </ResponsiveGrid>
    </>
  );
};
export default CompanyList;
