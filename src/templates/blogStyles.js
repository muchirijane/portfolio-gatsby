import styled from 'styled-components'

export const BlogContainer = styled.section`
margin: 2rem 0;
max-width: 750px;
@media only screen and (min-width: 1600px){
  max-width: 100%;
}

@media only screen and (max-width: 1200px){
  max-width: 650px;
}

a{
  color: #EAAF4A;
  text-decoration: none;

  &:hover{
    border-bottom: 2px solid currentColor;
    
  }
}

img{
  max-width: 750px;
  display: block;
  margin: 1.5rem 0;
}
`;