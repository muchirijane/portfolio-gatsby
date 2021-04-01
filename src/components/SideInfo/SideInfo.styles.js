import styled from 'styled-components'
import {Link} from 'gatsby'

export const SideContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-left: 30px;
margin-right: 80px;
@media only screen and (max-width: 900px){
  display: none;
}
`;
export const SideLogoWrapper = styled.div`
height: 54px;
width: 54px;
margin-top: 2rem;
position: fixed;
top: 0;

`;
export const SocialWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: fixed;
bottom: 0;
`;
export const SocialIconsWrapper = styled.div`
display: flex;
flex-direction: column;
`;

export const SocialIcons = styled(Link)`
text-decoration: none;
color: #EAAF4A;
margin-bottom: 1rem;
font-size: 2rem;
`;
export const SocialLine = styled.div`
width: 2px;
height: 7rem;
background: #EAAF4A;
margin-top: 1rem;
`;


