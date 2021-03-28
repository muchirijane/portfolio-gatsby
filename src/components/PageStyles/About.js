import styled from 'styled-components'
import {Link} from 'gatsby'

export const AboutContainer = styled.section`
margin: 30px auto;

@media only screen and (max-width: 1400px){
  max-width: 1000px;
}
`;
export const AboutCode = styled.h4`
color: #585858;
font-size: 2rem;
font-weight: lighter;

&:first-child{
  margin-top: 30px;
}
`;
export const NameDetails = styled.div`
margin: 1rem 0;
`;
export const NameCode = styled.h3`
font-size: 1.6rem;
font-weight: lighter;
color: #64F6FF;
`;
export const Name = styled.h4`
font-weight: 400;
font-size: 1.8rem;
margin-left: 1rem;
`;
export const AboutWrapper = styled.div`
margin: 1rem 0;
width: 80%;
`;
export const AboutMeCode = styled.h4`
font-weight: 400;
color: #EAAF4A;
`;
export const About = styled.div`

`;
export const AboutLink = styled(Link)`
color: #EAAF4A;
  text-decoration: none;
`;
export const AboutDetails = styled.p`
line-height: 2;
margin-left: 1rem;
`;

export const SkillDetails = styled.div`
margin: 1rem 0;
`;
export const SkillCode = styled.h4`
font-weight: 400;
color: #A0FF56;
`;
export const SkillContainer = styled.div`
display: flex;
margin-left: 1rem;
`;
export const SkillWrapper = styled.div`
&:not(:last-child){
  margin-right: 2rem;
}
`;
export const SkillTitle = styled.h3`
color: #585858;
font-size: 1.6rem;
font-weight: lighter;
`;
export const SkillItem = styled.h4`
font-weight: 400;
`;

export const Copyright = styled.p`
color: #7E7E7E;
font-size: 1.4rem;
text-align: center;
padding-top: 2rem;
`;

export const CopyrightLink = styled(Link)`
color:  #EAAF4A;
text-decoration: none;
padding: 0 1rem;
`;