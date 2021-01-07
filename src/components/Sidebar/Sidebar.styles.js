import styled from 'styled-components'
import {Link} from 'gatsby'
import {FaFolderOpen} from 'react-icons/fa'
import {DiJsBadge} from 'react-icons/di'

export const Nav = styled.nav`
background: #181825;
color: #B1B1B1;
width: 15%;
height: 100vh;
display: flex;
flex-direction: column;

`;

export const NavContainer = styled.div`
margin: 20px;
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
&:hover{
  color: #EAAF4A;
}
`;
export const MenuIcon = styled(FaFolderOpen)`
color: #B1B1B1;
font-size: 1.7rem;
margin-right: 2rem;

&:hover{
  color: #EAAF4A;
}
`;
export const MenuText = styled.span`
color: #B1B1B1;
font-size: 1.8rem;

&:hover{
  color: #EAAF4A;
}
`;

export const Menu = styled.ul``;

export const MenuItem = styled.li`
list-style: none;
`;

export const MenuLink = styled(Link)`
text-decoration: none;
color: #B1B1B1;
font-size: 1.8rem;

&:hover{
  color: #EAAF4A;
}
`;

export const NavLinkIcon = styled(DiJsBadge)`
color: #B1B1B1;
font-size: 2.4rem;
&:hover{
  color: #EAAF4A;
}
`;