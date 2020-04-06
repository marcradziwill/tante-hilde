/* eslint-disable max-statements */
// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

const path = require('path');
const _ = require('lodash');
const stripMarkdownPlugin = require('strip-markdown');
const remark = require('remark');
const PAGINATION_OFFSET = 8;
const { createFilePath } = require('gatsby-source-filesystem');
const slugify = require('@sindresorhus/slugify');

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

function stripMarkdown(markdownString) {
  return remark()
    .use(stripMarkdownPlugin)
    .processSync(markdownString)
    .toString();
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

const createPosts = (createPage, createRedirect, edges) => {
  edges.forEach(({ node }, i) => {
    const prev = i === 0 ? null : edges[i - 1].node;
    const next = i === edges.length - 1 ? null : edges[i + 1].node;
    const pagePath = node.fields.slug;

    createPage({
      path: pagePath,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        id: node.id,
        prev,
        next,
      },
    });
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

    acc[pageIndex].push(value.node.id);

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
  if (_.isEmpty(data.edges)) {
    throw new Error('There are no posts!');
  }

  const { edges } = data;
  const { createRedirect, createPage } = actions;
  createPosts(createPage, createRedirect, edges);
  createPaginatedPages(
    actions.createPage,
    edges,
    blogPath,
    paginationTemplate,
    {
      categories: [],
    },
  );
  return null;
}

// exports.onCreatePage = async ({ actions, page }) => {
//   const { createPage, deletePage } = actions;
//   const oldPage = { ...page };

//   deletePage(oldPage);
//   createPage({
//     ...page,
//     path: page.path,
//     context: {
//       options: {
//         indexStrategy: 'Prefix match',
//         searchSanitizer: 'Lower Case',
//         TitleIndex: true,
//         AuthorIndex: true,
//         SearchByTerm: true,
//       },
//       ...page.context,
//     },
//   });
// };
exports.createPages = async ({ actions, graphql }) => {
  // createCategoryPages({
  //   blogCategoryPath: '/blog/categories/',
  //   data: blog,
  //   paginationTemplate: path.resolve(`src/templates/category.js`),
  //   actions,
  // });

  const { data, errors } = await graphql(`
    fragment PostDetails on Mdx {
      fileAbsolutePath
      id
      parent {
        ... on File {
          name
          sourceInstanceName
        }
      }
      excerpt(pruneLength: 250)
      fields {
        title
        slug
        description
        date
        modified
        categories
      }
    }

    query {
      blog: allMdx(
        filter: {
          frontmatter: { published: { ne: false } }
          fileAbsolutePath: { regex: "//content/blog//" }
        }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            ...PostDetails
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

  const { companies, blog } = data;

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

  createBlogPages({
    blogPath: '/schaufenster/',
    data: blog,
    paginationTemplate: path.resolve(`src/templates/blog.js`),
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

  if (node.internal.type === `Mdx`) {
    const name = path.basename(node.fileAbsolutePath, `.mdx`).split('.')[0];
    let lang = path.basename(node.fileAbsolutePath, `.mdx`).split(`.`)[1];
    if (lang === 'md') {
      lang = 'en';
    }
    createNodeField({ node, name: `name`, value: name });
    createNodeField({ node, name: `locale`, value: lang });

    if (node.frontmatter.image && node.frontmatter.image.src) {
      createNodeField({
        name: 'image',
        node,
        value: node.frontmatter.image.src,
      });
    }
    if (node.fileAbsolutePath.includes('content/blog/')) {
      const parent = getNode(node.parent);
      let slug =
        node.frontmatter.slug ||
        createFilePath({ node, getNode, basePath: `pages` });
      slug = `/blog/${node.frontmatter.slug || slugify(parent.name)}/`;

      createNodeField({
        name: 'id',
        node,
        value: node.id,
      });

      createNodeField({
        name: 'published',
        node,
        value: node.frontmatter.published,
      });

      createNodeField({
        name: 'title',
        node,
        value: node.frontmatter.title,
      });

      createNodeField({
        name: 'author',
        node,
        value: node.frontmatter.author || 'Marc Radziwill',
      });

      createNodeField({
        name: 'description',
        node,
        value: node.frontmatter.description,
      });

      createNodeField({
        name: 'plainTextDescription',
        node,
        value: stripMarkdown(node.frontmatter.description),
      });

      createNodeField({
        name: 'slug',
        node,
        value: slug,
      });

      createNodeField({
        name: 'date',
        node,
        value: node.frontmatter.date ? node.frontmatter.date.split(' ')[0] : '',
      });
      createNodeField({
        name: 'modified',
        node,
        value: node.frontmatter.modified
          ? node.frontmatter.modified.split(' ')[0]
          : undefined,
      });

      createNodeField({
        name: 'modifiedDescription',
        node,
        value: node.frontmatter.modifiedDescription
          ? stripMarkdown(node.frontmatter.modifiedDescription)
          : undefined,
      });

      createNodeField({
        name: 'banner',
        node,
        value: node.frontmatter.banner,
      });

      createNodeField({
        name: 'bannerCredit',
        node,
        value: node.frontmatter.bannerCredit,
      });

      createNodeField({
        name: 'categories',
        node,
        value: node.frontmatter.categories || [],
      });

      createNodeField({
        name: 'keywords',
        node,
        value: node.frontmatter.keywords || [],
      });

      createNodeField({
        name: 'readerLevel',
        node,
        value: node.frontmatter.readerLevel,
      });
      createNodeField({
        name: 'readingDependencies',
        node,
        value: node.frontmatter.readingDependencies,
      });
    }
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
