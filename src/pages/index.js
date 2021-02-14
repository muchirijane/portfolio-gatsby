import React from "react"
import Typical from 'react-typical'
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
} from '../components/PageStyles/Home';

const IndexPage = () => (
   <Layout>
    <SEO title="Home" />
    <HomeContainer>
       <HomeCode>
          {"<"}Home {">"}
       </HomeCode>
       <HomeWrapper>
         <HomeIntro>Hey my name is
         <span role="img" aria-label=" A Cool emoji">
          😎
         </span>
         </HomeIntro>
         <HomeName>Jane Tracy</HomeName>
         <HomeText>
         I am a 
         <HomeTextSpan>

            <Typical
            steps={['passionate', 2000, 'Creative', 2000, 'self-taught', 2000,'driven', 2000, ]}
            loop={Infinity}
            wrapper="span"
            />
         </HomeTextSpan>
         developer
         </HomeText>
         <HomeDetails>
         I am a self taught front end developer,
         who enjoys coding cool websites and making
         them user friendly and easy to navigate. 
         User Expericence is important in what I create.  
         </HomeDetails>
         <Button as='a' href='mailto: muchirijane@outlook.com' bigFont primary  >Hire Me</Button>
       </HomeWrapper>
       <HomeCode>
          {"<"}Home {"/>"}
       </HomeCode>
       
    </HomeContainer>
   </Layout>
)

export default IndexPage
