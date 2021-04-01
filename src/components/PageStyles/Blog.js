import styled from 'styled-components'
import {Link} from 'gatsby'

export const BlogContainer = styled.section`
margin: 1rem auto;
@media only screen and (max-width: 1430px){
  max-width: 1000px;
}
`;

export const BlogHeader = styled.h1`
font-size: 3rem;
color: #EAAF4A;
margin: 2rem 0;
`;

export const BlogWrapper = styled.div`
margin: 1rem auto;
@media only screen and (max-width: 750px){
  width: 450px;
}

ol{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  list-style: none;
  @media only screen and (min-width: 1400px){
    grid-column-gap: 10rem;
  }
  @media only screen and (min-width: 1900px){
    grid-column-gap: 15rem;
  }

  @media only screen and (max-width: 1300px){
    grid-template-columns: 1fr;
  }

  li{
    max-width: 550px;
    transition: all .2s cubic-bezier(.68,.1,.06,1.16);

    &:hover{
      h2,a{
        color: #EAAF4A;
      }
      a{
        transition: all .3s cubic-bezier(.68,.1,.06,1.16);
        span{
          margin-left: 1rem;
        }
      }
    }
  }

}
`;

export const BlogTitle = styled.h2`
font-size: 2rem;
text-decoration: none;
color: #DBDBDB;
`;

export const BlogDesc = styled.h3`
font-size: 1.8rem;
font-weight: 400;
padding-bottom: 1rem;
text-decoration: none;
color: #DBDBDB;
`;

export const BlogLink = styled(Link)`
font-size: 1.6rem;
text-decoration: none;
color: #DBDBDB;
font-weight: 800;

span{
  margin-left: .5rem;
}

&:hover{
  color: #EAAF4A;
}
`;

export const LinkBlog = styled(Link)`
text-decoration: none;
`;