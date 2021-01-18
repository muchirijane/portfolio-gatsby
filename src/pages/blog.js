import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import SEO from "../components/seo"
import Layout from '../components/Layout/layout'
import {Code} from '../GlobalStyles/GlobalStyles'
import {BlogContainer, BlogHeader, BlogWrapper,BlogLink, BlogTitle, BlogDesc, LinkBlog} from '../components/PageStyles/Blog'
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
          fields{
            slug
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
                <LinkBlog to={`/blog/${edge.node.fields.slug}`}>
                  <BlogTitle>{edge.node.frontmatter.title}</BlogTitle>
                  <BlogDesc>{edge.node.frontmatter.description}</BlogDesc>
                  <BlogLink to ='/'>Read More <span>&rarr;</span></BlogLink>
                </LinkBlog>
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
