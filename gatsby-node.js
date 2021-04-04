const path = require('path');

exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions

  if(node.internal.type === 'MarkdownRemark'){
    const slug = path.basename(node.fileAbsolutePath, '.md')

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
  
}

exports.createPages = async({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js');
  const res = await graphql(`
    query{
      allMarkdownRemark{
        edges{
          node{
            fields{
              slug
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach((edge)=>{
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })
}