import styled from 'styled-components'
import {FaTwitter,FaGithub,FaDev,FaLinkedinIn} from 'react-icons/fa'

export const SideContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`;
export const SideLogoWrapper = styled.div``;
export const SocialWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
export const SocialIcons = styled.div`
display: flex;
flex-direction: column;
`;
export const SocialTwitter = styled(FaTwitter)`
color: #EAAF4A;
margin-bottom: 1rem;
font-size: 2.4rem;
`;
export const SocialGithub = styled(FaGithub)`
color: #EAAF4A;
margin-bottom: 1rem;
font-size: 2.4rem;
`;
export const SocialDev = styled(FaDev)`
color: #EAAF4A;
margin-bottom: 1rem;
font-size: 2.4rem;
`;
export const SocialLinkedin = styled(FaLinkedinIn)`
color: #EAAF4A;
margin-bottom: 1rem;
font-size: 2.4rem;
`;
export const SocialLine = styled.div`
width: 2px;
height: 7rem;
background: #EAAF4A;
margin-top: 1rem;
`;

