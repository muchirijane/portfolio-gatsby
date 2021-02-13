import styled from 'styled-components';
import {FaGithub} from 'react-icons/fa'
import {BiLinkAlt} from 'react-icons/bi'

export const ProjectContainer = styled.section`
margin: 2rem auto;
`;
export const ProjectWrapper = styled.div`
margin: 1rem auto;
display: flex;
flex-direction: column;

`;

export const ProjectInfo = styled.div`
margin: 1.2rem auto;

`;

export const ProjectTitle = styled.h2`
font-size: 2rem;
`;

export const ProjectDetail = styled.div`

margin: .5rem auto;

display: flex;
flex-direction: row;

@media only screen and (max-width: 1200px){
  flex-direction: column;
}
`;

export const ImgWrapper = styled.div`
display: flex;
width: 350px;
justify-content: flex-start;
border-radius: 15px;
overflow: hidden;
height: 200px;

a{
  height: 100%;
  width: 100%;
}
`;

export const Img = styled.img`
width: 100%;
max-height: 220px;
display: inline-block;
border: 0;
`;

export const TextWrapper = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: column;
width: 50%;
margin-left: 2rem;
`;

export const ProjectContent = styled.p`
font-size: 1.8rem;
padding-bottom: 1.4rem;
`;

export const ProjectStack = styled.h3`
font-size: 1.4rem;
`;

export const ProjectButtons = styled.div`
margin-top: 2rem;

a{
  margin-right: 2rem;
  font-size: 1.4rem;
}

`;

export const SourceIcon = styled(FaGithub)`
color: #EAAF4A;
font-size: 1.4rem;
margin-right: .8rem;
`;

export const LiveIcon = styled(BiLinkAlt)`
color: #1B1B29;
font-size: 1.4rem;
margin-right: .8rem;
`;

export const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 5rem;
`;