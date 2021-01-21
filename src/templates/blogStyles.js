import styled from 'styled-components'

export const BlogContainer = styled.section`
margin: 2rem 0;

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