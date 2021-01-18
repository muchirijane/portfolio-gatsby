import React from 'react'
import Layout from '../components/Layout/layout'
//import {Portfolio}  from '../content/portfolio.json'
import SEO from "../components/seo"
import Project from '../content/Project'
//import { Project, Desc,SubText } from '../content/projectStyles'

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects"/>
      <Project/>
      {/* <Project>
        {Projects.map((project, index)=>{
          return(
            <div>
              <Desc>{project.Desc}</Desc>
              <SubText>{project.SubText}</SubText>
              
            </div>
          )
        })}
        
      </Project> */}

      
    </Layout>
  )
}

export default Projects

// import React from 'react'
// import {useStaticQuery, graphql} from 'gatsby'
//  import Layout from '../components/Layout/layout'
//  import SEO from "../components/seo"
// import { Button, Code, OutlineButton} from '../GlobalStyles/GlobalStyles'

// import {ProjectContainer, ProjectWrapper, ProjectInfo, ProjectTitle, ProjectDetail,TextWrapper,
// ImgWrapper, Img,ProjectDesc,ProjectSubText,ProjectButtons,SourceIcon,LiveIcon} from '../components/Project/ProjectSection.styles';

// const Project = ({imgStart, start, img, alt, PreviewLink, Githublink, Title, Desc, SubText})=> {
//   const data = useStaticQuery(graphql`
//     query{
//       allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["portfolio"]}}) {
//         edges {
//           node {
//             childImageSharp {
//               fluid {
//                 src
//               }
//             }
//           }
//         }
//       }
//     }
//   `
//   )
//   return(
//     <Layout>
//       <SEO title="Projects"/>

//       <ProjectContainer>
//         <Code>
//           {"<"} Projects  {">"}
//         </Code>
//         <ProjectWrapper>
//           <ProjectInfo>
//             <ProjectTitle>{Title}</ProjectTitle>
//             <ProjectDetail imgStart={imgStart}>
//               <ImgWrapper start={start}>
//                 <Img src={img} alt={alt}/>
//                 {data.allFile.edges.map((image, key)=>(
//                   <Img key={key} fluid={image.node.childImageSharp.fluid}/>
//                 )) }
//               </ImgWrapper>
//               <TextWrapper>
//                 <ProjectDesc>{Desc}</ProjectDesc>
//                 <ProjectSubText>{SubText}</ProjectSubText>
//               </TextWrapper>
//               <ProjectButtons>
//                 <Button href={Githublink} target='_blank' rel="noreferrer noopener">
//                   <SourceIcon/>
//                   Github
//                 </Button>
//                 <OutlineButton href={PreviewLink} target='_blank' rel="noreferrer noopener">
//                   <LiveIcon/>
//                   Live Site
//                 </OutlineButton>
//               </ProjectButtons>
//             </ProjectDetail>
//           </ProjectInfo>
//         </ProjectWrapper>
//         <Code>
//           {"<"} Projects  {"/>"}
//         </Code>

     
//       </ProjectContainer>
//     </Layout>

//   );

// }

// export default Project;