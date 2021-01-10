import React from 'react'
import Layout from '../components/Layout/layout'
import {TextLink, Code, Button, Copyright, CopyrightLink} from '../GlobalStyles/GlobalStyles'
import {ContactContainer,ContactWrapper, ContactTitle,ContactText,ContactExtraText
 } from '../components/PageStyles/Contact'
const Contact = () => {
  return (
    <Layout>
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
          </ContactExtraText>
          <Button bigRadius primary bigFont >Let's Talk</Button>
        </ContactWrapper>
        <Code>
          {"<"} Contact  {"/>"}
        </Code>
        <Copyright>
        Designed and built by 
        <CopyrightLink to ='https://github.com/muchirijane'>&copy; Jane Tracy {new Date().getFullYear()}</CopyrightLink>
      </Copyright>
      </ContactContainer>
      
    </Layout>
  )
}

export default Contact
