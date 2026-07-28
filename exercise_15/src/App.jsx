import { useState } from 'react';
import Headern from './Header';
import TranslationContext from './TranslationContext';
import Header from './Header';

function App() {

  const [language, setLanguage] = useState('spanish');
  document.title = 'Exercise 15';


  const changeLanguage = (e) => {
    if (language === 'spanish') {
      setLanguage('english')
    } else {
      setLanguage('spanish')
    }
  }

  return (
    <>
      <TranslationContext.Provider value={language} >
        <Header changeLanguage={changeLanguage} />
      </TranslationContext.Provider>
    </>
  )
}

export default App
