import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/background.jpg';

export const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
  }
  body{
    background-image: url(${BGImage});
    background-size: cover;
    padding: 0 20px;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  *{
    box-sizing: border-box;
    font-family: 'Catamaran'
  }
`;
