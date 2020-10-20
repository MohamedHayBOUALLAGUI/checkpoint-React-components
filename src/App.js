import React from 'react';
import logo from './logo.svg';
import './App.css';
import FullName from './Component/Profile/FullName';
import ProfilPhoto from './Component/Profile/ProfilPhoto';
import Adress from './Component/Profile/Adress';
import Navbar from './Component/Profile/Navbar';



function App() {
  return (
    <div>
   <Navbar />
   <FullName/>
   <div style={{display:'flex'}}>
   <ProfilPhoto/>
   <Adress/>
   
   </div>

   </div>

  );
}

export default App;
