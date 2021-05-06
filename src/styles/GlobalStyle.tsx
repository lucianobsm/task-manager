import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --background: #181820;
    --background-progress: #32323f;
    --black: #21212B;
    --black-highlight: #272732; //hover
    --link-active: #414052;
    --pale-grey: #f6f6f6;
    --white-could: #FEFCFB;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: var(--background);
  color: var(--pale-grey);
}

body,
input,
button {
  font: 400 1rem 'Poppins', 'Lato', sans-serif;
}

a,
button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%; //15px
  }
}

@media (max-width: 768px) {
  html {
    font-size: 87.5%; //14px
  }
}

@media (max-width: 414px) {
  html {
    font-size: 81.25%; //13px
  }
}

@media (max-width: 320px) {
  html {
    font-size: 75%; //12px
  }
}

`;

export default GlobalStyle;
