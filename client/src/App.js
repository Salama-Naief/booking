import RootPage from './page/RootPage';
import './App.css';
import {useEffect} from 'react';
import i18next from 'i18next';


function App() {
  
  useEffect(()=>{
    i18next.changeLanguage("en")
  },[])
  return (
    <RootPage/>
  );
}

export default App;
