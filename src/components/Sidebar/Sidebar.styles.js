import styled from 'styled-components'
import {Link} from 'gatsby'
import {FaFolderOpen} from 'react-icons/fa'
import {DiJsBadge} from 'react-icons/di'

export const Nav = styled.nav`
background: #181825;
color: #B1B1B1;
width: 12%;
height: 100vh;
display: flex;
flex-direction: column;
position: fixed;
right: 0;

@media only screen and (max-width: 1400px){
  width: 16%;
}
@media only screen and (max-width: 900px){
  height: 80px;
  bottom: 0;
  width: 100%;
  z-index: 200;

}
`;

export const NavContainer = styled.div`
position: fixed;
right: 20px;
top: 20%;
margin: 20px;
display: flex;
flex-direction: column;
transform: translate(-30%, 0%);
&:hover{
  color: #EAAF4A;
}
@media only screen and (max-width: 1350px){
  margin: 0;
}
@media only screen and (max-width: 900px){
  bottom: 30px;
  top: 93%;
  display: grid;
  place-items: center;
}
@media only screen and (max-width: 550px){
  transform: translate(-10%, 0%);
}
@media only screen and (max-width: 380px){
  transform: translate(-1%, 0%); 
}
`;
export const MenuContainer = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
color: #B1B1B1;
text-decoration: none;
margin-bottom: 30px;
&:hover,
&:active{
  color: #EAAF4A;
}
@media only screen and (max-width: 900px){
  display: none;
}
`;
export const MenuIcon = styled(FaFolderOpen)`
color: #EAAF4A;
font-size: 3rem;
margin-right: 1rem;
@media only screen and (max-width: 900px){
  display: none;
}

`;
export const MenuText = styled.span`
color: #EAAF4A;
font-size: 1.8rem;
`;

export const Menu = styled.ul`
margin-left: 10px;

@media only screen and (max-width: 900px){
  display: flex;
  margin-left: 0px;

}
@media only screen and (max-width: 380px){
    margin-left: -2.5rem;
}
`;

export const MenuItem = styled.li`
list-style: none;
&:not(:last-child){
  margin-bottom: 2rem;

  @media only screen and (max-width: 900px){
     margin-right: 5rem;
     margin-bottom: 0;
  }
  @media only screen and (max-width: 600px){
     margin-right: 4rem;
  }
  @media only screen and (max-width: 500px){
    margin-right: 3rem;
  }
  @media only screen and (max-width: 410px){
    margin-right: 2.5rem;
  }
}
`;

export const MenuLink = styled(Link)`
text-decoration: none;
color: #B1B1B1;
font-size: 1.8rem;

&:hover,
&:active{
  color: #EAAF4A;
}
`;

export const NavLinkIcon = styled(DiJsBadge)`
color: #B1B1B1;
font-size: 2.2rem;
margin-right: 1rem;
&:hover{
  color: #EAAF4A;
}

@media only screen and (max-width: 900px){
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 750px){
     display: none;
  }
`;