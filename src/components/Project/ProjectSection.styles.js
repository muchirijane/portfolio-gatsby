import styled from 'styled-components';
import {FaGithub} from 'react-icons/fa'
import {BiLinkAlt} from 'react-icons/bi'

export const ProjectContainer = styled.section`
margin: 2rem auto;
`;
export const ProjectWrapper = styled.div`
margin: 1rem auto;
`;

export const ProjectInfo = styled.div`
margin: 1.2rem auto;
`;

export const ProjectTitle = styled.h2`
font-size: 3rem;
`;

export const ProjectDetail = styled.div`

margin: .5rem auto;

display: flex;
align-items: center;
flex-direction: ${({imgStart}) => (imgStart ? 'row' : 'row-reverse')};

@media only screen and (max-width: 1200px){
  flex-direction: column;
}
`;

export const ImgWrapper = styled.div`
display: flex;
max-width: 400px;
justify-content: ${({start}) =>(start ? 'flex-start' : 'flex-end')};
border-radius: 15px;
overflow: hidden;
`;

export const Img = styled.img`
max-width: 100%;
max-height: 220px;
display: inline-block;
border: 0;
`;

export const TextWrapper = styled.div`
display: flex;
justify-content: flex-start;
`;

export const ProjectDesc = styled.p`
font-size: 1.8rem;
padding-bottom: 1.4rem;
`;

export const ProjectSubText = styled.h4`
font-size: 1.4rem;
`;

export const ProjectButtons = styled.div`
display: flex;
justify-content: center;
`;

export const SourceIcon = styled(FaGithub)`
color: #EAAF4A;
font-size: 2rem;
`;

export const LiveIcon = styled(BiLinkAlt)`
color: #EAAF4A;
font-size: 2rem;
`;