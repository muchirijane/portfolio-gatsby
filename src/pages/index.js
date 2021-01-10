import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import { Button } from "../GlobalStyles/GlobalStyles"
import {
   HomeContainer,
   HomeCode,
   HomeWrapper,
   HomeIntro,
   HomeName,
   HomeText,
   HomeTextSpan,
   HomeDetails,
   Copyright,
   CopyrightLink
} from '../components/PageStyles/Home';

const IndexPage = () => (
   <Layout>
    <SEO title="Home" />
    <HomeContainer>
       <HomeCode>
          {"<"}Home {">"}
       </HomeCode>
       <HomeWrapper>
         <HomeIntro>Hey my name is</HomeIntro>
         <HomeName>Jane Tracy</HomeName>
         <HomeText>
         I am a 
         <HomeTextSpan>passionate</HomeTextSpan>
         developer
         </HomeText>
         <HomeDetails>
         I am a self taught front end developer,
         who enjoys coding cool websites and making
         them user friendly and easy to navigate. 
         User Expericence is important in what I create.  
         </HomeDetails>
         <Button to='/contact' bigRadius primary bigPadding bigFont>Hire Me</Button>
       </HomeWrapper>
       <HomeCode>
          {"<"}Home {"/>"}
       </HomeCode>
       <Copyright>
        Designed and built by 
        <CopyrightLink to ='https://github.com/muchirijane'>&copy; Jane Tracy {new Date().getFullYear()}</CopyrightLink>
      </Copyright>
    </HomeContainer>
   </Layout>
)

export default IndexPage
