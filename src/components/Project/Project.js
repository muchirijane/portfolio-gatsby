import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import { Button, Code, OutlineButton, Copyright, CopyrightLink } from '../../GlobalStyles/GlobalStyles'

import {ProjectContainer, ProjectWrapper, ProjectInfo, ProjectTitle, ProjectDetail,TextWrapper,
ImgWrapper, Img,ProjectDesc,ProjectSubText,ProjectButtons,SourceIcon,LiveIcon} from './ProjectSection.styles';

const Project = ({imgStart, start, img, alt, PreviewLink, Githublink, Title, Desc, SubText})=> {
  const data = useStaticQuery(graphql`
    query{
      allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["portfolio"]}}) {
        edges {
          node {
            childImageSharp {
              fluid {
                src
              }
            }
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
          <ProjectInfo>
            <ProjectTitle>{Title}</ProjectTitle>
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
            </ProjectDetail>
          </ProjectInfo>
        </ProjectWrapper>
        <Code>
          {"<"} Projects  {"/>"}
        </Code>
     
      </ProjectContainer>
    </>

  );

}

export default Project;