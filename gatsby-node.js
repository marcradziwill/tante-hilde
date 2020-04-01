// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

const path = require('path');
const _ = require('lodash');

function createCompanyPages({ companyPath, data, actions }) {
  if (_.isEmpty(data.edges)) {
    throw new Error('There are no posts!');
  }

  const { edges } = data;
  const { createPage } = actions;

  edges.forEach(({ node }, i) => {
    let pagePath = node.Name_Firma.toLowerCase().replace(/\s/g, '-');
    pagePath = pagePath.replace(/-+/g, '-');
    pagePath = pagePath.replace(/ä/g, 'ae');
    pagePath = pagePath.replace(/ü/g, 'ue');
    pagePath = pagePath.replace(/ö/g, 'oe');
    pagePath = pagePath.replace(/ß/g, 'ss');
    pagePath = pagePath.replace(/é/g, 'e');
    pagePath = pagePath.replace(/[&\/\\#,+()$!&~®%.'"*?<>{}]/g, '');
    const pagePathFull = pagePath.replace(/-+/g, '-');

    createPage({
      path: companyPath + pagePathFull,
      component: path.resolve(`./src/templates/company.js`),
      context: {
        id: node.id,
        company: node,
      },
    });
  });

  return null;
}
function createBranchPages({ prefixPath, data, actions }) {
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
    pagePath = pagePath.replace(/[&\/\\#,+()$!&~®%.'"*?<>{}]/g, '');
    com.node.fields = {
      pageUrl: pagePath.replace(/-+/g, '-'),
    };
  });

  createPage({
    path: `${prefixPath}${data.urlPath}/`,
    component: path.resolve(`./src/templates/branches.js`),
    context: {
      companies: data,
    },
  });

  return null;
}

exports.createPages = async ({ actions, graphql }) => {
  const { data, errors } = await graphql(`
    query {
      companies: allCompaniesCsv {
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

  const { companies } = data;
  const categories = companies.edges.map((com) => {
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
};

// eslint-disable-next-line complexity
const createCustomNodeFields = ({ node, getNode, actions }) => {
  const { createNodeField, createRemoteFileNode } = actions;
  if (node.internal.type === `CompaniesCsv`) {
    let pagePath = node['Name Firma'].toLowerCase().replace(/\s/g, '-');
    pagePath = pagePath.replace(/-+/g, '-');
    pagePath = pagePath.replace(/ä/g, 'ae');
    pagePath = pagePath.replace(/ü/g, 'ue');
    pagePath = pagePath.replace(/ö/g, 'oe');
    pagePath = pagePath.replace(/é/g, 'e');
    pagePath = pagePath.replace(/ß/g, 'ss');
    pagePath = pagePath.replace(/[&\/\\#,+()$!&~®%.'"*?<>{}]/g, '');
    const pagePathFull = pagePath.replace(/-+/g, '-');
    createNodeField({
      name: 'pageUrl',
      node,
      value: pagePathFull,
    });
  }
};
// exports.onCreateNode = async ({
//   node,
//   actions: { createNode },
//   store,
//   cache,
//   createNodeId,
// }) => {
//   // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
//   if (
//     node.internal.type === 'MarkdownRemark' &&
//     node.frontmatter.featuredImgUrl !== null
//   ) {
//     let fileNode = await createRemoteFileNode({
//       url: node.frontmatter.featuredImgUrl, // string that points to the URL of the image
//       parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
//       createNode, // helper function in gatsby-node to generate the node
//       createNodeId, // helper function in gatsby-node to generate the node id
//       cache, // Gatsby's cache
//       store, // Gatsby's redux store
//     });
//     // if the file was created, attach the new node to the parent node
//     if (fileNode) {
//       node.featuredImg___NODE = fileNode.id;
//     }
//   }
// };
// eslint-disable-next-line complexity
exports.onCreateNode = ({
  node,
  getNode,
  actions,
  loadNodeContent,
  createNodeId,
  createContentDigest,
}) => {
  createCustomNodeFields({
    node,
    getNode,
    actions,
    loadNodeContent,
    createNodeId,
    createContentDigest,
  });
};
