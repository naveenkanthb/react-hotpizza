import React from 'react';
import { createGlobalStyle } from 'styled-components'
import Navbar from './Navbar/Navbar';
import { Banner } from './Banner/Banner';

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    font-family: 'Open Sans', sans-serif;
  }

  h1,h2,h3{
    font-family: 'Righteous', cursive;
  }
`


function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <div>
        hello react app
      </div>
    </React.Fragment>
  );
}

export default App;
