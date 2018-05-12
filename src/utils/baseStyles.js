import { normalize } from "polished";
import { injectGlobal } from "styled-components";

export default () => injectGlobal`
    ${normalize()}

    @import url("https://fonts.googleapis.com/css?family=Bangers");
    @import url("https://fonts.googleapis.com/css?family=Roboto:400,900");
    @import url("https://fonts.googleapis.com/css?family=Press+Start+2P");
  
    * {
      font-family: "Roboto", sans-serif;
      box-sizing: border-box;
    }
    
    *:focus {
      outline: none;
    }
    
    a {
      text-decoration: none;
    }
    
    ul li, ol li {
        list-style: none;
    }
    
    html, body, #root {
      height: 100%;
    }
    
    body {
      padding: 0;
      background-color: white;
    }
`;
