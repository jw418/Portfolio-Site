import React from "react"
import './App.css';
import Formation from "./component/Formation"
//import AboutMe from "./component/AboutMe"
import MyProjects from "./component/MyProjects"
import Header from './component/Header';

function App() {

  // let isEng = true;

  // function switchLanguage(){
  //   isEng = !isEng
  // }
  //<AboutMe />

  return (
    <div className="app">
      <Header />
      <MyProjects/>      
      <Formation />      
    </div>
  );
}

export default App;

