import styled from 'styled-components'
import {Link} from 'gatsby'

export const Button = styled.button`
border-radius: ${({bigRadius}) => bigRadius? '44px':'30px' };
background: ${({primary})=> primary? '#EAAF4A' : '#141414'};
color: ${({primary})=> primary? '#141414' : '#EAAF4A'};
padding: ${({bigPadding})=> bigPadding ? '13px 34px': '8px 20px'};
font-size: ${({bigFont})=> bigFont? '1.6rem': '1.4rem'};
font-weight: regular;
outline: none;
cursor: pointer;
border: none;
text-decoration: none;
transition: all .5s ease-in;
&:hover{
  background: linear-gradient(90deg, #A0FF56 3.81%, #64F6FF 100%);
  /* color: #EAAF4A; */
  svg{
    color: #EAAF4A;
  }
}
`;

export const OutlineButton = styled.a`
padding: ${({bigPadding})=> bigPadding ? '13px 34px': '8px 20px'};
border: 3px solid ;
border-radius: ${({bigRadius})=> bigRadius? '44px': '40px'};
color: #EAAF4A;
outline: none;
font-size: ${({bigFont})=> bigFont? '1.8rem': '1.4rem'};
text-decoration: none;
cursor: pointer;
transition: all .2s ease;

&:hover{
  background: #141414;
  color:  #EAAF4A;
  border: none;

  svg{
    color: #EAAF4A;
  }
}
`;

export const TextLink = styled(Link)`
color:  #EAAF4A;
text-decoration: none;
padding: 0 1rem;
`;

export const Code = styled.h1`
color: #585858;
font-size: 2rem;
font-weight: lighter;
`;

export const Copyright = styled.p`
color: #7E7E7E;
font-size: 1.4rem;
text-align: center;
padding-top: 2rem;
`;

export const CopyrightLink = styled(Link)`
color:  #EAAF4A;
text-decoration: none;
padding: 0 1rem;
`;