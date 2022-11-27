import { createGlobalStyle } from "styled-components";
import "../font/index.css"
import reset from "styled-reset";

const GlobalSytle = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    font-family: 'SLEIGothicTTF';
    font-size: 20px;
  }

`

export default GlobalSytle;
