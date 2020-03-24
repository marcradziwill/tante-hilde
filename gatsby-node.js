// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */
const { google } = require('googleapis');
const credentials = require('./credentials.json');
const fs = require('fs');
// const path = require('path');
// const _ = require('lodash');
// const i18n = require(`./src/utils/i18n`);
// const slugify = require('@sindresorhus/slugify');
// const { createFilePath } = require('gatsby-source-filesystem');
// const stripMarkdownPlugin = require('strip-markdown');
// const remark = require('remark');
// const { getTranslatedPathIfExists } = require(`./src/utils/gatsb-node-helper`);
// const PAGINATION_OFFSET = 8;
// const arrayOfPagesNotToTranslate = [
//   '/dev-404-page/',
//   '/offline-plugin-app-shell-fallback/',
// ];
// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage, deletePage } = actions;
//   const oldPage = { ...page };

//   if (!arrayOfPagesNotToTranslate.includes(page.path)) {
//     Object.keys(i18n).map((lang) => {
//       const localizedPathObj = getTranslatedPathIfExists(oldPage.path, lang);
//       if (
//         localizedPathObj &&
//         !arrayOfPagesNotToTranslate.includes(localizedPathObj.entry)
//       ) {
//         deletePage(oldPage);
//         page.path = localizedPathObj.path;
//         createPage({
//           ...page,
//           path: page.path,
//           context: {
//             pageEntry: localizedPathObj.entry,
//             locale: lang,
//             ...page.context,
//           },
//         });
//       }
//       return true;
//     });
//   }
// };

// function stripMarkdown(markdownString) {
//   return remark()
//     .use(stripMarkdownPlugin)
//     .processSync(markdownString)
//     .toString();
// }

// const createPosts = (createPage, createRedirect, edges) => {
//   edges.forEach(({ node }, i) => {
//     const prev = i === 0 ? null : edges[i - 1].node;
//     const next = i === edges.length - 1 ? null : edges[i + 1].node;
//     const pagePath = node.fields.slug;

//     if (node.fields.redirects) {
//       node.fields.redirects.forEach((fromPath) => {
//         createRedirect({
//           fromPath,
//           toPath: pagePath,
//           redirectInBrowser: true,
//           isPermanent: true,
//         });
//       });
//     }

//     createPage({
//       path: pagePath,
//       component: path.resolve(`./src/templates/post.js`),
//       context: {
//         id: node.id,
//         prev,
//         next,
//       },
//     });
//   });
// };

// function createPaginatedPages(
//   createPage,
//   edges,
//   pathPrefix,
//   paginationTemplate,
//   context,
// ) {
//   const pages = edges.reduce((acc, value, index) => {
//     const pageIndex = Math.floor(index / PAGINATION_OFFSET);

//     if (!acc[pageIndex]) {
//       acc[pageIndex] = [];
//     }

//     acc[pageIndex].push(value.node.id);

//     return acc;
//   }, []);

//   pages.forEach((page, index) => {
//     const previousPagePath = `${pathPrefix}${index + 1}`;
//     const nextPagePath = index === 1 ? pathPrefix : `${pathPrefix}${index - 1}`;

//     createPage({
//       path: index > 0 ? `${pathPrefix}${index}` : `${pathPrefix}`,
//       component: paginationTemplate,
//       context: {
//         locale: 'en',
//         pagination: {
//           page,
//           nextPagePath: index === 0 ? null : nextPagePath,
//           previousPagePath:
//             index === pages.length - 1 ? null : previousPagePath,
//           pageCount: pages.length,
//           pathPrefix,
//         },
//         ...context,
//       },
//     });
//   });
// }

// function createBlogPages({ blogPath, data, paginationTemplate, actions }) {
//   if (_.isEmpty(data.edges)) {
//     throw new Error('There are no posts!');
//   }

//   const { edges } = data;
//   const { createRedirect, createPage } = actions;
//   createPosts(createPage, createRedirect, edges);
//   createPaginatedPages(
//     actions.createPage,
//     edges,
//     blogPath,
//     paginationTemplate,
//     {
//       categories: [],
//     },
//   );
//   return null;
// }
// function createCategoryPages({
//   blogCategoryPath,
//   data,
//   paginationTemplate,
//   actions,
// }) {
//   if (_.isEmpty(data.edges)) {
//     throw new Error('There are no posts!');
//   }

//   const { edges } = data;

//   let categories = [];

//   _.each(edges, (edge) => {
//     if (_.get(edge, 'node.fields.categories')) {
//       categories = categories.concat(edge.node.fields.categories);
//     }
//   });

//   // const categoryOccurrences = _.countBy(categories);

//   categories = _.uniq(categories);
//   categories.forEach((category) => {
//     let categoryPosts = edges.filter((obj) => {
//       if (obj.node.fields.categories) {
//         return obj.node.fields.categories.includes(category);
//       }
//       return false;
//     });
//     categoryPosts = categoryPosts.reduce((acc, value, index) => {
//       const pageIndex = Math.floor(index / PAGINATION_OFFSET);

//       if (!acc[pageIndex]) {
//         acc[pageIndex] = [];
//       }

//       acc[pageIndex].push(value.node.id);

//       return acc;
//     }, []);

//     categoryPosts.forEach((page, index) => {
//       const previousPagePath = `${blogCategoryPath}${_.kebabCase(
//         category,
//       )}/${index + 1}`;
//       const nextPagePath =
//         index === 1
//           ? `${blogCategoryPath}${_.kebabCase(category)}`
//           : `${blogCategoryPath}${_.kebabCase(category)}/${index - 1}`;

//       actions.createPage({
//         path:
//           index > 0
//             ? `${blogCategoryPath}${_.kebabCase(category)}/${index}`
//             : `${blogCategoryPath}${_.kebabCase(category)}`,
//         component: paginationTemplate,
//         context: {
//           locale: 'en',
//           category,
//           pagination: {
//             page,
//             nextPagePath: index === 0 ? null : nextPagePath,
//             previousPagePath:
//               index === categoryPosts.length - 1 ? null : previousPagePath,
//             pageCount: categoryPosts.length,
//             blogCategoryPath: `${blogCategoryPath}${_.kebabCase(category)}`,
//           },
//         },
//       });
//     });

//     // actions.createPage({
//     //   path: `${blogCategoryPath}${_.kebabCase(category)}`,
//     //   component: paginationTemplate,
//     //   context: {
//     //     locale: 'en',
//     //     category,
//     //   },
//     // });
//   });

//   // createPaginatedPages(
//   //   actions.createPage,
//   //   edges,
//   //   blogPath,
//   //   paginationTemplate,
//   //   {
//   //     categories: [],
//   //   },
//   // );
//   return null;
// }

// exports.createPages = async ({ actions, graphql }) => {
//   const { data, errors } = await graphql(`
//     fragment PostDetails on Mdx {
//       fileAbsolutePath
//       id
//       parent {
//         ... on File {
//           name
//           sourceInstanceName
//         }
//       }
//       excerpt(pruneLength: 250)
//       fields {
//         title
//         slug
//         description
//         date
//         modified
//         redirects
//         categories
//       }
//       wordCount {
//         words
//       }
//       timeToRead
//     }
//     query {
//       blog: allMdx(
//         filter: {
//           frontmatter: { published: { ne: false } }
//           fileAbsolutePath: { regex: "//content/blog//" }
//         }
//         sort: { order: DESC, fields: [frontmatter___date] }
//       ) {
//         edges {
//           node {
//             ...PostDetails
//           }
//         }
//       }
//     }
//   `);
//   if (errors) {
//     return Promise.reject(errors);
//   }
//   const { blog } = data;
//   createBlogPages({
//     blogPath: '/blog/',
//     data: blog,
//     paginationTemplate: path.resolve(`src/templates/blog.js`),
//     actions,
//   });
//   createCategoryPages({
//     blogCategoryPath: '/blog/categories/',
//     data: blog,
//     paginationTemplate: path.resolve(`src/templates/category.js`),
//     actions,
//   });
// };

// async function createJsonNodes({
//   node,
//   actions,
//   loadNodeContent,
//   createNodeId,
//   createContentDigest,
// }) {
//   const { createNode, createParentChildLink } = actions;

//   function transformObject(obj, id, type) {
//     // console.log(obj);
//     // if (obj.heroImages.length > 0)
//     //   obj.heroImages.forEach((image, index) => {
//     //     console.log(image.src);
//     //   });
//     const jsonNode = {
//       ...obj,
//       id,
//       name: node.name,
//       children: [],
//       parent: node.id,
//       internal: {
//         contentDigest: createContentDigest(obj),
//         type,
//       },
//     };
//     if (node.sourceInstanceName === `translations`) {
//       const lang = node.name.split(`.`)[1];
//       jsonNode.locale = lang;
//       jsonNode.name = jsonNode.name.split(`.`)[0];
//     }
//     createNode(jsonNode);
//     createParentChildLink({ parent: node, child: jsonNode });
//   }
//   if (
//     ![`application/json`, `application/javascript`].includes(
//       node.internal.mediaType,
//     )
//   ) {
//     return;
//   }

//   const content = await loadNodeContent(node);
//   let parsedContent = {};
//   if (node.internal.mediaType === `application/json`) {
//     parsedContent = JSON.parse(content);
//     if (_.isArray(parsedContent)) {
//       parsedContent.forEach((obj, i) => {
//         transformObject(
//           obj,
//           obj.id ? obj.id : createNodeId(`${node.id} [${i}] >>> JSON`),
//           'TranlationJson',
//         );
//       });
//     } else if (_.isPlainObject(parsedContent)) {
//       transformObject(
//         parsedContent,
//         parsedContent.id
//           ? parsedContent.id
//           : createNodeId(`${node.id} >>> JSON`),
//         'TranlationJson',
//       );
//     }
//   }
// }

// const scopes = ['https://www.googleapis.com/auth/drive'];
// const auth = new google.auth.JWT(
//   credentials.client_email,
//   null,
//   credentials.private_key,
//   scopes,
// );
// const drive = google.drive({ version: 'v3', auth });

// eslint-disable-next-line complexity
const createCustomNodeFields = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `CompaniesCsv`) {
    const urlParams = node.Logo.split('id=');
    const imageId = urlParams[1];
    createNodeField({
      name: 'imageId',
      node,
      value: imageId,
    });
  }

  // console.log(node['Speisekarte / sonstige PDF (nur PDF oder Bilder)']);
  // const res = await drive.files.list({
  //   folderId:
  //     '0B9HCh7K3NqqCfmVyU0pWWkFIR1BwcDRxdll1Rl9DLW5QRmlsMUloeXZ5SzdlazJfUFQzUmc',
  //   orderBy: 'createdTime desc',
  // });

  // const dest = fs.createWriteStream(`${node.Name}.png`);
  // await drive.files.get(
  //   { fileId: idParam, alt: 'media' },
  //   { responseType: 'stream' },
  //   // {},
  //   (err, res) => {
  //     console.log(err, res);
  //     res.data
  //       .on('end', () => {
  //         console.log('done');
  //       })
  //       .on('error', (err) => {
  //         console.log('error', err);
  //       });
  //     // .pipe(dest);
  //   },
  // );
  // console.log(res.data);
  // drive.files.list(
  //   {
  //     fields: `files(name, ${node.Logo})`,
  //   },
  //   (err, res) => {
  //     if (err) throw err;
  //     const files = res.data.files;
  //     if (files.length) {
  //       files.map((file) => {
  //         console.log(file);
  //       });
  //     } else {
  //       console.log('No files found');
  //     }
  //   },
  // );
  //     createNodeField({
  //   name: 'imageSrc',
  //   node,
  //   value: node.id,
  // });
  // }
  // if (node.internal.type === `Mdx`) {
  //   const name = path.basename(node.fileAbsolutePath, `.mdx`).split('.')[0];
  //   let lang = path.basename(node.fileAbsolutePath, `.mdx`).split(`.`)[1];
  //   if (lang === 'md') {
  //     lang = 'en';
  //   }
  //   createNodeField({ node, name: `name`, value: name });
  //   createNodeField({ node, name: `locale`, value: lang });
  //   if (node.frontmatter.image && node.frontmatter.image.src) {
  //     createNodeField({
  //       name: 'image',
  //       node,
  //       value: node.frontmatter.image.src,
  //     });
  //   }
  //   if (node.fileAbsolutePath.includes('content/blog/')) {
  //     const parent = getNode(node.parent);
  //     let slug =
  //       node.frontmatter.slug ||
  //       createFilePath({ node, getNode, basePath: `pages` });
  //     slug = `/blog/${node.frontmatter.slug || slugify(parent.name)}/`;
  //     createNodeField({
  //       name: 'id',
  //       node,
  //       value: node.id,
  //     });
  //     createNodeField({
  //       name: 'published',
  //       node,
  //       value: node.frontmatter.published,
  //     });
  //     createNodeField({
  //       name: 'title',
  //       node,
  //       value: node.frontmatter.title,
  //     });
  //     createNodeField({
  //       name: 'author',
  //       node,
  //       value: node.frontmatter.author || 'Marc Radziwill',
  //     });
  //     createNodeField({
  //       name: 'description',
  //       node,
  //       value: node.frontmatter.description,
  //     });
  //     createNodeField({
  //       name: 'plainTextDescription',
  //       node,
  //       value: stripMarkdown(node.frontmatter.description),
  //     });
  //     createNodeField({
  //       name: 'slug',
  //       node,
  //       value: slug,
  //     });
  //     createNodeField({
  //       name: 'date',
  //       node,
  //       value: node.frontmatter.date ? node.frontmatter.date.split(' ')[0] : '',
  //     });
  //     createNodeField({
  //       name: 'modified',
  //       node,
  //       value: node.frontmatter.modified
  //         ? node.frontmatter.modified.split(' ')[0]
  //         : undefined,
  //     });
  //     createNodeField({
  //       name: 'modifiedDescription',
  //       node,
  //       value: node.frontmatter.modifiedDescription
  //         ? stripMarkdown(node.frontmatter.modifiedDescription)
  //         : undefined,
  //     });
  //     createNodeField({
  //       name: 'banner',
  //       node,
  //       value: node.frontmatter.banner,
  //     });
  //     createNodeField({
  //       name: 'bannerCredit',
  //       node,
  //       value: node.frontmatter.bannerCredit,
  //     });
  //     createNodeField({
  //       name: 'categories',
  //       node,
  //       value: node.frontmatter.categories || [],
  //     });
  //     createNodeField({
  //       name: 'keywords',
  //       node,
  //       value: node.frontmatter.keywords || [],
  //     });
  //     createNodeField({
  //       name: 'redirects',
  //       node,
  //       value: node.frontmatter.redirects,
  //     });
  //     createNodeField({
  //       name: 'isTechArticle',
  //       node,
  //       value: node.frontmatter.isTechArticle,
  //     });
  //     createNodeField({
  //       name: 'readerLevel',
  //       node,
  //       value: node.frontmatter.readerLevel,
  //     });
  //     createNodeField({
  //       name: 'readingDependencies',
  //       node,
  //       value: node.frontmatter.readingDependencies,
  //     });
  //   }
  // }
};

// eslint-disable-next-line complexity
exports.onCreateNode = ({
  node,
  getNode,
  actions,
  loadNodeContent,
  createNodeId,
  createContentDigest,
}) => {
  // createJsonNodes({
  //   node,
  //   actions,
  //   loadNodeContent,
  //   createNodeId,
  //   createContentDigest,
  // });
  createCustomNodeFields({
    node,
    getNode,
    actions,
    loadNodeContent,
    createNodeId,
    createContentDigest,
  });
};

// exports.onCreateWebpackConfig = ({
//   actions: { replaceWebpackConfig },
//   getConfig,
// }) => {
//   const config = getConfig();

//   // config.module.rules.push({
//   //   test: /\.worker\.js$/,
//   //   use: { loader: 'workerize-loader' },
//   // });

//   // config.output.globalObject = 'this';
//   // const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   //   .BundleAnalyzerPlugin;
//   // config.plugins.push(new BundleAnalyzerPlugin({}));
//   replaceWebpackConfig(config);
// };
