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
//scrollbar
::-webkit-scrollbar{
    width: 12px;
}

::-webkit-scrollbar-thumb{
    background-color: #EAAF4A;
    height: 3rem;
    border-radius: 10px;
    margin-right: 2px;
    :hover{
        background-color: #EAAF4A;
    }
}
::-webkit-scrollbar-track{
    border: 1px solid #1B1B29;
    background: #1B1B29;
    box-shadow: inset 0 0 2px 2px rgba(0,0,0, .05)
}

h4{
    font-size: 1.6rem;
}

h5{
    font-size: 1.4rem;
}

//code
code,
kbd,
pre,
samp {
font-family: Consolas, "Andale Mono WT", "Andale Mono",  Courier, monospace;
  font-size: 1em;
}

pre {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 1.45rem;
  font-size: 1.2rem;
  line-height: 1.42;
  background: #11111c;
  border-radius: 3px;
  overflow: auto;
  word-wrap: normal;
  padding: 1.45rem;
  overflow-x: auto; 
  text-shadow: 0 40px 80px rgba(0,0,0, .3);
}

@media print {
	pre {
		overflow-x: auto;
		white-space: pre-wrap;
		white-space: -moz-pre-wrap !important;
		white-space: -pre-wrap;
		white-space: -o-pre-wrap;
		word-wrap: break-word;
		background: #11111c;
	}
}

table, th, td {
  border: 1px solid #4a4a4a;
}

th,td{
    padding: 1rem;
}

table {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  font-size: 1.2rem;
  line-height: 1.6rem;
  border-collapse: collapse;
  width: 100%;
}
fieldset {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
blockquote {
  margin-left: 1.45rem;
  margin-right: 1.45rem;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}

dt {
  font-weight: bold;
}
th {
  font-weight: bold;
  background: #2e2e2e;
  color: #eee;
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


