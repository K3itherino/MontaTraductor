import Header from "./components/Header"
import Form from "./components/Form"
import './App.css';
import React from "react";

function App() {

  const [languageSelected, setLanguageSelected] = React.useState({translateFrom: "es", translateTo: "ces"})
    console.log(languageSelected)
  function changeLanguage(event){
      
      const {id, value} = event.target
      
      setLanguageSelected(prevLanguage => {

        if (id.length == 2){

          return({

            ...prevLanguage,
            translateFrom: id

          })

 
        }
        return ({

          ...prevLanguage,
          translateTo: id

      })

      })
      }

    

    return (
      <>
      <Header />
      <Form 
      TranslateFrom={languageSelected.translateFrom}
      TranslateTo={languageSelected.translateTo}
      changeLanguage={changeLanguage}
      />
      </>
  )
}

export default App;
