import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/Layout/layout'
import {TextLink, Code, Button} from '../GlobalStyles/GlobalStyles'
import {ContactContainer,ContactWrapper, ContactTitle,ContactText,ContactExtraText
 } from '../components/PageStyles/Contact'
const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactContainer>
        <Code>
          {"<"} Contact  {">"}
        </Code>
        <ContactWrapper>
          <ContactTitle>Get In Touch</ContactTitle>
          <ContactText>
            If you want me to be part of your team, you can reach out. I will be glad to work on cool projects as I   improve my skills.  You can also just say hey or get advice on how to be a good Tech blogger.  
          </ContactText>
          <ContactExtraText>
          You can also get me at dev.to
            <TextLink to='https://dev.to/tracycss' target='_blank' rel="noreferrer noopener">@Tracycss</TextLink>
            or email me at <TextLink href='mailto: muchirijane@outlook.com'>muchitijane@outlook.com</TextLink>
          </ContactExtraText>
          <Button bigRadius primary bigFont as='a' href='mailto: muchirijane@outlook.com'>Let's Talk</Button>
        </ContactWrapper>
        <Code>
          {"<"} Contact  {"/>"}
        </Code>
      </ContactContainer>
      
    </Layout>
  )
}

export default Contact
