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
  width: 25%;
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
`;
export const MenuIcon = styled(FaFolderOpen)`
color: #EAAF4A;
font-size: 3rem;
margin-right: 1rem;

`;
export const MenuText = styled.span`
color: #EAAF4A;
font-size: 1.8rem;
`;

export const Menu = styled.ul`
margin-left: 10px;
`;

export const MenuItem = styled.li`
list-style: none;
&:not(:last-child){
  margin-bottom: 2rem;
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
`;