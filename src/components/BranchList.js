import React from 'react';
import { Link } from 'gatsby';
import ResponsiveGrid from 'components/Layouts/ResponsiveGrid';
import { css } from '@emotion/core';
import { uniqBy, orderBy } from 'lodash';
import { media } from 'utils/media';

const BranchList = ({ companies }) => {
  const branches = companies.map((com) => {
    let cate = com.node.Branch.toLowerCase().replace(/\//g, '');
    cate = cate.replace(/ä/g, 'ae');
    cate = cate.replace(/ü/g, 'ue');
    cate = cate.replace(/ö/g, 'oe');
    cate = cate.replace(/ß/g, 'ss');
    cate = cate.replace(/\,/g, '');
    cate = cate.replace(/\-/g, '');
    cate = cate.replace(/\s+/g, '-');

    return {
      urlPath: cate,
      category: com.node.Branch,
    };
  });
  const branchesToDisplay = uniqBy(branches, 'urlPath');
  return (
    <ResponsiveGrid
      templatecolumns="33% 33% 33%"
      css={css`
        grid-gutter: 5px;
        display: flex;
        overflow: scroll;
        @media ${media.small} {
          display: grid;
          overflow: unset;
        }
      `}
    >
      {orderBy(branchesToDisplay, 'category').map((branche, index) => {
        return (
          <Link
            css={css`
              margin-right: 20px;
            `}
            to={`/branche/${branche.urlPath}/`}
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
              <div
                css={css`
                  width: 150px;
                  height: 150px;
                  border-radius: 50%;
                  background-color: #73b471;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `}
              >
                <span
                  css={css`
                    display: flex;
                    text-align: center;
                    color: #fff;
                    max-width: 157px;
                    padding: 10px;
                    word-break: break-all;
                  `}
                >
                  {branche.category}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </ResponsiveGrid>
  );
};
export default BranchList;
