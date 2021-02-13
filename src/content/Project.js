import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import { Button, Code, OutlineButton } from '../GlobalStyles/GlobalStyles'

import {ProjectContainer, ProjectWrapper, ProjectInfo, ProjectTitle, ProjectDetail,TextWrapper,
ImgWrapper, Img,ProjectStack,ProjectContent,ProjectButtons,SourceIcon,LiveIcon} from './projectStyles';

const Project = ()=> {
  const data = useStaticQuery(graphql`
  query{
    allPortfolioJson{
      edges{
        node{
          image{
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
          title,
          preview,
          source,
          stack,
          content
        }
      }
    }
  }
  `
  )
  return(
    <>
      <ProjectContainer>
        <Code>
          {"<"} Projects  {">"}
        </Code>
        <ProjectWrapper>
          
            {data.allPortfolioJson.edges.map((edge, index)=>(
              <ProjectInfo key={index}>
                 <ProjectTitle>{edge.node.title }</ProjectTitle>
                 <ProjectDetail>
                   <ImgWrapper>
                     <Img src={edge.node.image.childImageSharp.fluid } alt={edge.node.alt}/>
                   </ImgWrapper>
                   <TextWrapper>
                      <ProjectContent>{edge.node.content}</ProjectContent>
                      <ProjectStack>{edge.node.stack}</ProjectStack>

                      <ProjectButtons>
                        <OutlineButton as='a' href={edge.node.source} target='_blank' rel="noreferrer noopener">
                          <SourceIcon/>
                          Github
                        </OutlineButton>
                        <Button primary as='a' href={edge.node.preview} target='_blank' rel="noreferrer noopener">
                          <LiveIcon/>
                          Live Site
                        </Button>
                      </ProjectButtons>
                   </TextWrapper>
                  

                 </ProjectDetail>
              </ProjectInfo>  
            )) }
          
        </ProjectWrapper>
        <Code>
          {"<"} Projects  {"/>"}
        </Code>
     
      </ProjectContainer>
    </>

  );

}

export default Project;