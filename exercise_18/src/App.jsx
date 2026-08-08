
import { formReducer } from "./formReducer";
import { ContactContext } from "./ContactContext";
import ContactApp from './ContactApp';
import { useReducer } from "react";

function App() {

  document.title = "Exercise 18 - Contact Management App";


  const [state, dispatch] = useReducer(formReducer, []);

  return (

    <ContactContext.Provider value={{ state, dispatch }}>
      <ContactApp />
    </ContactContext.Provider>
  )
}

export default App
