import React from "react";
import Navbar from './Components/NavBar/NavBar';
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from './Components/RowPost/RowPost'
import {action,originals,comedy,Horror, Documentries,Romance} from './urls'
function App() {
  return (
    <div className="app">
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={action}title="Action" isSmall/>
      <RowPost url={comedy}title="Comedy" isSmall/>
      <RowPost url={Horror}title="Horror" isSmall/>
      <RowPost url={Romance}title="Romance" isSmall/>
      <RowPost url={Documentries}title="Documentries" isSmall/>
    </div>
  );
}

export default App;
