import React from "react"
import './App.css';
import Formation from "./component/Formation"
import MyProjects from "./component/MyProjects"
import Header from './component/Header';

function App() {

  const [isEng, setIsEng] = React.useState(false)
  const [isDark, setIsDark] = React.useState(false)

  function toggleLang() {
    setIsEng(prevState => !prevState)
  }
  
  function toggleStyle() {
    setIsDark(prevState => !prevState)
  }


  return (
    <div className="app">
      <Header  toggleStyle={toggleStyle} toggleLang={toggleLang} isEng={isEng} isDark={isDark}/>
      <MyProjects isEng={isEng} isDark={isDark}/>      
      <Formation  isEng={isEng} isDark={isDark}/>      
    </div>
  );
}

export default App;

