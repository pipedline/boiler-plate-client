import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';


const GlobalStyles = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    color: #000;
  }
  
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    background-color: #FFF;
  }

  button {
    display: flex;

    padding: 8px 12px;

    text-align: center;

    border: none;
    outline: none;
    cursor: pointer;

    background-color: transparent;

    &:hover,
    &:active {
      border: none;
      outline: none;
    }
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
