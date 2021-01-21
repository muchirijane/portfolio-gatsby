import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
//import { Project, Desc,SubText } from './projectStyles'
//import {Portfolio}  from './portfolio.json'
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
                     <Img fluid={edge.node.image.childImageSharp.fluid } alt={edge.node.alt}/>
                   </ImgWrapper>
                   <TextWrapper>
                      <ProjectContent>{edge.node.content}</ProjectContent>
                      <ProjectStack>{edge.node.stack}</ProjectStack>
                   </TextWrapper>
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

                 </ProjectDetail>
              </ProjectInfo>  
            )) }
            {/* <ProjectTitle>{Title}</ProjectTitle>
            <ProjectDetail imgStart={imgStart}>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt}/>
                {data.allFile.edges.map((image, key)=>(
                  <Img key={key} fluid={image.node.childImageSharp.fluid}/>
                )) }
              </ImgWrapper>
              <TextWrapper>
                <ProjectDesc>{Desc}</ProjectDesc>
                <ProjectSubText>{SubText}</ProjectSubText>
              </TextWrapper>
              <ProjectButtons>
                <Button href={Githublink} target='_blank' rel="noreferrer noopener">
                  <SourceIcon/>
                  Github
                </Button>
                <OutlineButton href={PreviewLink} target='_blank' rel="noreferrer noopener">
                  <LiveIcon/>
                  Live Site
                </OutlineButton>
              </ProjectButtons>
            </ProjectDetail> */}
          
        </ProjectWrapper>
        <Code>
          {"<"} Projects  {"/>"}
        </Code>
     
      </ProjectContainer>
    </>

  );

}

export default Project;