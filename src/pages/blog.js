import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import SEO from "../components/seo"
import Layout from '../components/Layout/layout'
import {Code} from '../GlobalStyles/GlobalStyles'
import {BlogContainer, BlogHeader, BlogWrapper, BlogTitle, BlogDesc, BlogLink} from '../components/PageStyles/Blog'
const Blog = () => {
  const data = useStaticQuery(graphql`
  query{
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title
            description
          }
        }
      }
    }
  }
  `)
  return (
    <Layout>
      <SEO title="Blog" />
      
      <BlogContainer>
        <Code>
          {"<"} Blog  {">"}
        </Code>
        <BlogHeader>My Blog</BlogHeader>
        <BlogWrapper>
            <ol>
            {data.allMarkdownRemark.edges.map((edge,index)=>(
              <li key={index}>
                <BlogTitle>{edge.node.frontmatter.title}</BlogTitle>
                <BlogDesc>{edge.node.frontmatter.description}</BlogDesc>
                <BlogLink to ='/'>Read More <span>&rarr;</span></BlogLink>
              </li>
            ))}
          </ol>
        </BlogWrapper>
        <Code>
          {"<"} Blog  {"/>"}
        </Code>
      </BlogContainer>
      
    </Layout>
  )
}

export default Blog
