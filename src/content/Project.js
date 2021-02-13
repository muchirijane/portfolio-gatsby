import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import { Button, Code, OutlineButton } from '../GlobalStyles/GlobalStyles'

import {ProjectContainer, ProjectWrapper, ProjectInfo, ProjectTitle, ProjectDetail,TextWrapper,
ImgWrapper, Img,ProjectStack,ProjectContent,ProjectButtons,SourceIcon,LiveIcon, ButtonWrapper} from './projectStyles';

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
                     <a href={edge.node.preview} target="_blank" rel="noreferrer">
                       <Img fluid={edge.node.image.childImageSharp.fluid} alt={edge.node.alt}/>
                     </a>
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

            <ButtonWrapper>
              <OutlineButton primary as='a' href="https://github.com/muchirijane" target='_blank' rel="noreferrer noopener">
                <SourceIcon/>
                More on Github            
              </OutlineButton>
            </ButtonWrapper>
          
        </ProjectWrapper>
        <Code>
          {"<"} Projects  {"/>"}
        </Code>
     
      </ProjectContainer>
    </>

  );

}

export default Project;