import styled from 'styled-components'

export const Button = styled.button`
border-radius: ${({bigRadius}) => bigRadius? '44px':'40px' };
background-color: ${({primary})=> primary? '#EAAF4A': '#eeee'};
color: ${({primary})=> primary? '#141414' : '#EAAF4A'};
padding: ${({bigPadding})=> bigPadding ? '13px 34px': '10px 28px'};
font-size: ${({bigFont})=> bigFont? '1.8rem': '1.5rem'};
outline: none;
cursor: pointer;
border: none;
`;

export const OutlineButton = styled.button`
border-radius: ${({bigRadius})=> bigRadius? '44px': '20px'};
border: 2px solid #EAAF4A;
color: #EAAF4A;
outline: none;
font-size: ${({bigFont})=> bigFont? '14px': '12px'};
background: transparent;
`;