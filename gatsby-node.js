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

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
}