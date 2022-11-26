import React from "react"
import './App.css';
import Formation from "./component/Formation"
import AboutMe from "./component/AboutMe"
import MyProjects from "./component/MyProjects"
import Header from './component/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <MyProjects />
      <AboutMe />
      <Formation />      
    </div>
  );
}

export default App;

