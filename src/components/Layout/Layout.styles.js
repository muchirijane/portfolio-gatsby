import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;800;900&family=Roboto:wght@700&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;

    @media only screen and (max-width: 1200px){
        font-size: 58%;
    }
    @media only screen and (min-width: 1980px){
        font-size: 85%;
    }
}
body{
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    font-size: 1.6rem;
    background: #1B1B29;
    color: #EAEAEA;

}
`;

export default GlobalStyles;

export const LayoutContainer = styled.div`
min-height: 100vh;
display: flex;
justify-content: space-between;
position: relative;
`;

export const Container = styled.main`
max-width: 1300px;
display: flex;
flex-direction: column;
justify-content: center;
position: absolute;
left: 10%;
/* transform: translate(80px, 10px); */
z-index: 100;

@media only screen and (max-width: 1300px){
max-width: 1100px;
}
`;

export const Circle = styled.div `
position: absolute;
top: 10%;
right: 30%;
z-index: 20;
`;
export const Star = styled.div `
position: absolute;
top: 20%;
right: 20%;
z-index: 20;
`;
export const Square = styled.div `
position: absolute;
top: 45%;
right: 30%;
z-index: 20;
`;
export const Triangle = styled.div `
position: absolute;
top: 60%;
right: 20%;
z-index: 20;
`;

