import styled from 'styled-components'
import {Link} from 'gatsby'

export const HomeContainer = styled.section`
padding: 30px 0;
`;
export const HomeCode = styled.h4`
color: #585858;
font-size: 2rem;
font-weight: lighter;
`;

export const HomeWrapper = styled.div`

@media only screen and (min-width: 1300px){
  margin: 12rem auto;
}
`;
export const HomeIntro = styled.h4`
font-size: 1.6rem;
font-weight: lighter;
margin-bottom: 2rem;
`;
export const HomeName = styled.h1`
font-size: 8rem;
font-weight: bold;
font-family: 'Roboto', sans-serif;
letter-spacing: 6px;
line-height: 1;
`;
export const HomeText = styled.h2`
font-size: 6.4rem;
font-weight: lighter;
`;
export const HomeTextSpan= styled.span`
color: #EAAF4A;
padding: 0 1rem;
`;
export const HomeDetails = styled.h3`
font-size: 2rem;
font-weight: 400;
width: 50%;
margin-bottom: 3.5rem;
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