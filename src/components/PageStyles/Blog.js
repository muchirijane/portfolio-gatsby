import styled from 'styled-components'
import {Link} from 'gatsby'

export const BlogContainer = styled.section`
margin: 1rem auto;
`;

export const BlogHeader = styled.h1`
font-size: 3rem;
color: #EAAF4A;
margin: 2rem 0;
`;

export const BlogWrapper = styled.div`
margin: 1rem auto;

ol{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  @media only screen and (min-width: 1400px){
    grid-column-gap: 10rem;
  }
  @media only screen and (min-width: 1900px){
    grid-column-gap: 15rem;
  }

  @media only screen and (max-width: 1200px){
    grid-template-columns: 1fr;
  }

  li{
    max-width: 550px;
  }

}
`;

export const BlogTitle = styled.h2`
font-size: 2rem;
`;

export const BlogDesc = styled.h3`
font-size: 1.8rem;
font-weight: 400;
padding-bottom: 1rem;
`;

export const BlogLink = styled(Link)`
font-size: 1.6rem;
text-decoration: none;
color: #DBDBDB;
font-weight: 800;

span{
  margin-left: 1rem;
}

&:hover{
  color: #EAAF4A;
}
`;