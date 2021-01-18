import React from 'react'
import { graphql} from 'gatsby'
import Layout from '../components/Layout/layout'
import { BlogContainer } from './blogStyles'

export const query = graphql`
query(
  $slug: String!
){
  markdownRemark(
    fields: {
      slug: {
        eq: $slug
      }
    }
  ){
    frontmatter{
      title
    }
    html
  }
}
`;

const blog = (props) => {
  return (
    <Layout>
      <BlogContainer>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
      </BlogContainer>
    </Layout>
  )
}

export default blog
