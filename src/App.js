import React from 'react';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }

  h1,h2,h3{
    font-family: 'Righteous', cursive;
  }
`


function App() {
  return (
    <React.Fragment>
      <h1>React App</h1>
      <GlobalStyle />
      <div>
        hello react app
      </div>
    </React.Fragment>
  );
}

export default App;
