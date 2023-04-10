import React from "react"
import './App.css';
import Formation from "./component/Formation"
import MyProjects from "./component/MyProjects"
import Header from './component/Header';

function App() {

  const [isEng, setIsEng] = React.useState(true)
  const [isDark, setIsDark] = React.useState(false)

  function toggleLang() {
    setIsEng(prevState => !prevState)
  }
  
  function toggleStyle() {
    setIsDark(prevState => !prevState)
  }


  return (
    <div className={`bg-div${isDark ? "-dark" : ""}`}>
    <div className={`app${isDark ? "-dark" : ""}`}>
      <Header  toggleStyle={toggleStyle} toggleLang={toggleLang} isEng={isEng} isDark={isDark}/>
      <MyProjects isEng={isEng} isDark={isDark}/>      
      <Formation  isEng={isEng} isDark={isDark}/>      
    </div>
    </div>
  );
}

export default App;

