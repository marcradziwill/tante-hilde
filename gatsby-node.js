/* eslint-disable max-statements */
// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

const path = require('path');
const _ = require('lodash');
// const Client = require('@googlemaps/google-maps-services-js').Client;
const PAGINATION_OFFSET = 8;

function createCompanyPages({ companyPath, data, actions }) {
  if (_.isEmpty(data.edges)) {
    throw new Error('There are no posts!');
  }

  const { edges } = data;
  const { createPage } = actions;

  edges.forEach(({ node }) => {
    let pagePath = node.Name_Firma.toLowerCase().replace(/\s/g, '-');
    pagePath = pagePath.replace(/-+/g, '-');
    pagePath = pagePath.replace(/ä/g, 'ae');
    pagePath = pagePath.replace(/ü/g, 'ue');
    pagePath = pagePath.replace(/ö/g, 'oe');
    pagePath = pagePath.replace(/ß/g, 'ss');
    pagePath = pagePath.replace(/é/g, 'e');
    pagePath = pagePath.replace(/[&/\\#,+()$!&~®%.'"*?<>{}]/g, '');
    const pagePathFull = pagePath.replace(/-+/g, '-');
    // console.log(node.Logo_Link.substr(1));
    createPage({
      path: companyPath + pagePathFull,
      component: path.resolve(`./src/templates/company.js`),
      context: {
        id: node.id,
        imagename: node.Logo_Link.substr(1) || '',
        company: node,
      },
    });
  });

  return null;
}

const createBranchPages = ({ prefixPath, data, actions }) => {
  if (_.isEmpty(data)) {
    throw new Error('There are no branches!');
  }

  const { createPage } = actions;

  data.companies.forEach((com) => {
    let pagePath = com.node.Name_Firma.toLowerCase().replace(/\s/g, '-');
    pagePath = pagePath.replace(/-+/g, '-');
    pagePath = pagePath.replace(/ä/g, 'ae');
    pagePath = pagePath.replace(/ü/g, 'ue');
    pagePath = pagePath.replace(/ö/g, 'oe');
    pagePath = pagePath.replace(/é/g, 'e');
    pagePath = pagePath.replace(/ß/g, 'ss');
    pagePath = pagePath.replace(/[&/\\#,+()$!&~®%.'"*?<>{}]/g, '');
    com.node.fields = {
      pageUrl: pagePath.replace(/-+/g, '-'),
    };
  });

  return createPage({
    path: `${prefixPath}${data.urlPath}/`,
    component: path.resolve(`./src/templates/branches.js`),
    context: {
      companies: data,
    },
  });

  // return null;
};

const createPosts = (createPage, blogPath, createRedirect, edges) => {
  edges.forEach((node, i) => {
    const prev = i === 0 ? null : edges[i - 1].node;
    const next = i === edges.length - 1 ? null : edges[i + 1].node;
    const pagePath = node.slug;
    if (pagePath !== 'hallo-welt') {
      createPage({
        path: `${blogPath}${pagePath}/`,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          id: node.id,
          prev,
          next,
        },
      });
    }
  });
};

function createPaginatedPages(
  createPage,
  edges,
  pathPrefix,
  paginationTemplate,
  context,
) {
  const pages = edges.reduce((acc, value, index) => {
    const pageIndex = Math.floor(index / PAGINATION_OFFSET);

    if (!acc[pageIndex]) {
      acc[pageIndex] = [];
    }

    acc[pageIndex].push(value.id);

    return acc;
  }, []);

  pages.forEach((page, index) => {
    const previousPagePath = `${pathPrefix}${index + 1}`;
    const nextPagePath = index === 1 ? pathPrefix : `${pathPrefix}${index - 1}`;

    createPage({
      path: index > 0 ? `${pathPrefix}${index}` : `${pathPrefix}`,
      component: paginationTemplate,
      context: {
        locale: 'en',
        pagination: {
          page,
          nextPagePath: index === 0 ? null : nextPagePath,
          previousPagePath:
            index === pages.length - 1 ? null : previousPagePath,
          pageCount: pages.length,
          pathPrefix,
        },
        ...context,
      },
    });
  });
}

function createBlogPages({ blogPath, data, paginationTemplate, actions }) {
  if (_.isEmpty(data.nodes)) {
    throw new Error('There are no posts!');
  }

  const { nodes } = data;
  const { createRedirect, createPage } = actions;
  createPosts(createPage, blogPath, createRedirect, nodes);
  createPaginatedPages(
    actions.createPage,
    nodes,
    blogPath,
    paginationTemplate,
    {
      categories: [],
    },
  );
  return null;
}

exports.createPages = async ({ actions, graphql }) => {
  const { data, errors } = await graphql(`
    query {
      blogWp: allWordpressPost(
        filter: { status: { eq: "publish" } }
        sort: { fields: date, order: ASC }
      ) {
        nodes {
          id
          title
          date(formatString: "MMMM DD, YYYY")
          content
          slug
          excerpt
          categories {
            name
          }
          featured_media {
            alt_text
            source_url
            title
          }
        }
      }
      companies: allCompaniesCsv(filter: { Publizieren: { ne: "false" } }) {
        edges {
          node {
            Beschreibung
            Email
            Facebook_Link
            Instagram_Link
            Lieferung___Bezahlung
            PLZ__Ort
            Rechtliches
            Strasse__Hausnummer
            Telefon
            Webseite
            Webshop_Link
            Mobile
            Keywords
            Suchbegriffe___Schl_sselw_rter
            Zeitstempel
            PDF_Link
            Name_Firma
            Logo_Link
            Branch
            Fax
            Ansprechpartner
            Bestellung__ber_
            Video_Link
          }
        }
      }
    }
  `);
  if (errors) {
    return Promise.reject(errors);
  }

  const { companies, blogWp } = data;

  const categories = companies.edges.map((com) => {
    let cate = com.node.Branch.toLowerCase().replace(/\//g, '');
    cate = cate.replace(/ä/g, 'ae');
    cate = cate.replace(/ü/g, 'ue');
    cate = cate.replace(/ö/g, 'oe');
    cate = cate.replace(/ß/g, 'ss');
    cate = cate.replace(/,/g, '');
    cate = cate.replace(/-/g, '');
    cate = cate.replace(/\s+/g, '-');
    return {
      urlPath: cate,
      category: com.node.Branch,
    };
  });

  const categoriesToPage = _.uniqBy(categories, 'category');

  categoriesToPage.forEach((item) => {
    const cateCom = companies.edges.filter((com) => {
      return com.node.Branch.includes(item.category);
    });
    item.companies = cateCom;
    createBranchPages({
      prefixPath: '/branche/',
      data: item,
      actions,
    });
  });

  createCompanyPages({
    companyPath: '/unternehmen/',
    data: companies,
    paginationTemplate: path.resolve(`src/templates/company.js`),
    actions,
  });

  createBlogPages({
    blogPath: '/schaufenster/',
    data: blogWp,
    paginationTemplate: path.resolve(`src/templates/blog.js`),
    actions,
  });
};
// const { createRemoteFileNode } = require('gatsby-source-filesystem');
// eslint-disable-next-line complexity
const createCustomNodeFields = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `CompaniesCsv`) {
    let pagePath = node['Name Firma'].toLowerCase().replace(/\s/g, '-');
    pagePath = pagePath.replace(/-+/g, '-');
    pagePath = pagePath.replace(/ä/g, 'ae');
    pagePath = pagePath.replace(/ü/g, 'ue');
    pagePath = pagePath.replace(/ö/g, 'oe');
    pagePath = pagePath.replace(/é/g, 'e');
    pagePath = pagePath.replace(/ß/g, 'ss');
    pagePath = pagePath.replace(/[&/\\#,+()$!&~®%.'"*?<>{}]/g, '');
    const pagePathFull = pagePath.replace(/-+/g, '-');

    createNodeField({
      name: 'pageUrl',
      node,
      value: pagePathFull,
    });
    // createNodeField({
    //   name: 'imageUrl',
    //   node,
    //   value: `./static${node['Logo Link']}`,
    // });

    // const fileNode = await createRemoteFileNode({
    //   url: node['Logo Link'],
    //   parentNodeId: node.id,
    //   createNode: actions.createNode,
    //   createNodeId,
    //   cache,
    //   store,
    // });
    // if (fileNode) {
    //   node.featuredImg___NODE = fileNode.id;
    // }
  }
};

// eslint-disable-next-line complexity
exports.onCreateNode = ({
  node,
  getNode,
  actions,
  loadNodeContent,
  createNodeId,
  createContentDigest,
  store,
  cache,
}) => {
  createCustomNodeFields({
    node,
    getNode,
    actions,
    loadNodeContent,
    createNodeId,
    createContentDigest,
    store,
    cache,
  });
};
