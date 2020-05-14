import React,{useState} from 'react';
import {GlobalStyle} from './styles/GlobalStyle'
import Navbar from './Navbar/Navbar';
import { Banner } from './Banner/Banner';
import Menu from './Menu/Menu';

function App() {
  const [openFood,setOpenFood] = useState();
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <div>
      {openFood}
      </div>
      
      <Menu setOpenFood={setOpenFood}/>
    </React.Fragment>
  );
}

export default App;
