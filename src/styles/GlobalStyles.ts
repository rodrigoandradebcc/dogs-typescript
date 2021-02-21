import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input {

    outline: 0;
    /* font-family: 'Roboto', sans-serif; */
  }

  body{
    padding-top: 6em;
    color: #333;
    font-family: var(--type-first);
  }

  h1,h2,h3,h4,p{
    margin: 0;
  }

  ul,li{
    list-style: none;
    padding: 0px;
    margin: 0px;
  }

  img{
    display: block;
    max-width: 100%;
  }

  button, input{
    display: block;
    font-size: 1rem;
    font-family: var(--type-first);
    color: #333;
  }

  :root {
    --type-first: Helvetica, Arial, sans-serif;
    --type-second: 'Spectral', Georgia;
  }

  .container{
    max-width: 50rem;
    padding: 0 1rem;
    margin: 0 auto;
  }

`;
