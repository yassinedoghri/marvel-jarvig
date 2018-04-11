// ----- styles/index.js
import {injectGlobal} from 'styled-components';
import {normalize} from 'polished';

export default () => injectGlobal`
    ${normalize()}

    @import url('https://fonts.googleapis.com/css?family=Bangers');
    @import url('https://fonts.googleapis.com/css?family=Roboto');

  
    * {
    font-family: "Roboto", sans-serif;
    }
    
    *:focus {
    outline: none;
    }
    
    html, body, #root {
    height: 100%;
    }
    
    body {
    padding: 0;
    background-color: white;
}
`