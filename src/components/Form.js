import React from "react"
import "./Form.css"

export default function Form(props){

    const [text, setText] = React.useState({toTranslate: "", translated: ""})

   

    function handleText(event){

        const{id, value} = event.target

        setText(prevText => ({

            ...prevText,
            [id]: value

        }))


    }

    React.useEffect(() =>{


        
        fetch("https://libretranslate.de/translate", {
            method: "POST",
            body: JSON.stringify({
                q: text.toTranslate,
                source: props.TranslateFrom,
                target: props.TranslateTo.substring(1,3),
                format: "text",
                
            }),
            headers: { "Content-Type": "application/json" }
        })
        .then(res => res.json())
        .then(data => setText(prevText =>({

            ...prevText,
            translated: data.translatedText

        })))

    }, [text.toTranslate, props.translateFrom, props.TranslateTo])

    
            
        
       return( 
        <div className="translateForm">
            <div className="languageContainer"><label htmlFor="spanish">translate: </label>
            <span 
            onClick={props.changeLanguage} id="es" 
            className={props.TranslateFrom == "es" ? "selected": ""}>Spanish</span>
            <span 
            onClick={props.changeLanguage} id="de" 
            className={props.TranslateFrom == "de" ? "selected": ""}>German</span>
            <span 
            onClick={props.changeLanguage} id="en" 
            className={props.TranslateFrom == "en" ? "selected": ""}>English</span>
            <label htmlFor="ces" >To:</label>
            <span 
            onClick={props.changeLanguage} id="ces" 
            className={props.TranslateTo == "ces" ? "selected": ""}>Spanish</span>
            <span 
            onClick={props.changeLanguage} id="cde" 
            className={props.TranslateTo == "cde" ? "selected": ""}>German</span>
            <span 
            onClick={props.changeLanguage} id="cen" 
            className={props.TranslateTo == "cen" ? "selected": ""}>English</span></div>
            
            
            <form>
            <textarea 
            className="toTranslate" 
            placeholder="Text you want to translate" 
            id="toTranslate" 
            onChange={handleText}
            ></textarea>
            <textarea
            className="translated" 
            placeholder="Your translated text will be here"  
            id="translated" 
            onChange={handleText}
            value={text.translated}
            readOnly
            ></textarea>
            <button className="translateButton" type="submit">Reset</button>
            </form>
        
        
        </div>

    )
       }
