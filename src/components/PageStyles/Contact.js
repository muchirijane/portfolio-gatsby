import styled from 'styled-components'

export const ContactContainer = styled.section`
margin: 30px auto;
@media only screen and (max-width: 1500px){
  max-width: 1000px;
}
@media only screen and (max-width: 1300px){
  max-width: 700px;
}
`;
export const ContactWrapper = styled.div`
margin: 12rem auto;
@media only screen and (max-width: 450px){
  margin: 5rem auto;
}
`;
export const ContactTitle = styled.h1`
font-size: 4.8rem;
padding-bottom: 2rem;
`;
export const ContactText = styled.h2`
font-weight: 400;
font-size: 2.2rem;
@media only screen and (max-width: 750px){
    width: 80%;
  }
`;
export const ContactExtraText = styled.h3`
font-weight: 300;
font-size: 2rem;
margin-top: 2rem;
margin-bottom: 4rem;
@media only screen and (max-width: 750px){
  width: 80%;
}
`;