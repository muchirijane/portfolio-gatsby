import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/Layout/layout'

import {
  AboutContainer,
  AboutCode,
  NameDetails,
  NameCode,
  Name,
  AboutWrapper,
  AboutMeCode,
  About,
  AboutLink,
  AboutDetails,
  SkillDetails,
  SkillCode,
  SkillContainer,
  SkillWrapper,
  SkillTitle,
  SkillItem,
} from '../components/PageStyles/About'


const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <AboutCode>
          {"<"} About {">"}
        </AboutCode>
      <AboutContainer>
        <NameDetails>
          <NameCode>name: {"<string> {"}</NameCode>
          <Name>Jane Tracy Muthoni</Name>
          <NameCode>{"{"}</NameCode>
        </NameDetails>
        <AboutWrapper>
          <AboutMeCode>about-me: {"<string> {"}</AboutMeCode>
          <About>
            <AboutDetails>
            I am Jane, a passionate self-taught front-end developer.
            After my degree in Public Relations I did some marketing with that I got introduced to graphic design and web design.With more time on them, I got to love design and started doing User Interface for mobile applications. This is where I truly fell in love with User experience and how important it is in everything I create. 
            </AboutDetails>
            <AboutDetails>
              In August 2020, I decided to learn code cause I had a lot of request if I can code what I designed. But   Unfortunately I didn’t know how to code. I took some courses on Udemy like: 
              <AboutLink to='https://www.udemy.com/course/advanced-css-and-sass/' target='_blank' rel="noreferrer noopener">Advanced Sass and Css: Flexbox,Grid, Css Animations and More</AboutLink>, 
              <AboutLink to='https://www.udemy.com/course/the-complete-javascript-course/' target='_blank' rel="noreferrer noopener">The advanced Complete JavaScript Course</AboutLink>, Online Gatsby Bootcamp and a couple of Youtube videos to learn React and Gatsby. 
            </AboutDetails>
            <AboutDetails>
              As I learned I also started a Blog On Dev.to <AboutLink to='https://dev.to/tracycss' target='_blank' rel="noreferrer noopener">@Tracycss</AboutLink> to share my  knowledge. By the end to 2020, I was among the top authors with more than 100k+ views. I didn’t realise how helpful my knowledge was until I started blogging about my Journey and how to build things with TailwindCss, Css and React. I also do <AboutLink to='https://www.youtube.com/watch?v=IUZTbEaDo0U&t=41s' target='_blank' rel="noreferrer noopener">technical script writing for Tech YouTube channels.</AboutLink>
            </AboutDetails>
          </About>
          <AboutMeCode>{"}"}</AboutMeCode>
        </AboutWrapper>
        <SkillDetails>
          <SkillCode>skill: {"<string> {"}</SkillCode>
          <SkillContainer>
            <SkillWrapper>
              <SkillTitle>{'//'} Languages</SkillTitle>
              <SkillItem>HTML</SkillItem>
              <SkillItem>CSS</SkillItem>
              <SkillItem>SASS</SkillItem>
              <SkillItem>JavaScript</SkillItem>
              <SkillItem>React</SkillItem>
            </SkillWrapper>
            <SkillWrapper>
              <SkillTitle>{'//'} Tools</SkillTitle>
              <SkillItem>Git & Github</SkillItem>
              <SkillItem>Chrome Dev Tools</SkillItem>
              <SkillItem>VS Code</SkillItem>
              <SkillItem>Terminal</SkillItem>
            </SkillWrapper>
            <SkillWrapper>
              <SkillTitle>{'//'} Design</SkillTitle>
              <SkillItem>Figma</SkillItem>
              <SkillItem>Adobe XD</SkillItem>
              <SkillItem>Zeplin</SkillItem>
            </SkillWrapper>
          </SkillContainer>
          <SkillCode>{"{"}</SkillCode>
        </SkillDetails>
      </AboutContainer>
      <AboutCode>
          {"<"} About {"/>"}
        </AboutCode>
      
    </Layout>
  )
}

export default AboutPage
