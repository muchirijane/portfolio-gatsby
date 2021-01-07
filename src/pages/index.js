import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Button } from "../GlobalStyles/GlobalStyles"
import {
   HomeContainer,
   HomeCode,
   HomeIntro,
   HomeName,
   HomeText,
   HomeTextSpan,
   HomeDetails
} from '../components/PageStyles/Home';

const IndexPage = () => (
   <Layout>
    <SEO title="Home" />
    <HomeContainer>
       <HomeCode>
          {"<"}Home {">"}
       </HomeCode>
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
       <HomeCode>
          {"<"}Home {"/>"}
       </HomeCode>
    </HomeContainer>
   </Layout>
)

export default IndexPage
