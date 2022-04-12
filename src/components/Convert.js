import React, { useState , useEffect } from "react";
import axios from "axios";

const Convert = ({language, text}) => {
    const [translated, setTranslated] = useState('')
//     const [debouncedText, setDebouncedText] = useState(text)
// useEffect(()=>{
//     const timerId = setTimeout(()=>{
//         setDebouncedText(text)
//         console.log("*****")
//     },2);

//     return () => {
//         clearTimeout(timerId)
//     };
// },[debouncedText])

useEffect(()=>{
    const translation = async ()=>{
        const {data} = await axios.post("https://translation.googleapis.com/language/translate/v2",{},{
            params:{
                q : text,
                target : language.value,
                key : "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
            }
        })
        setTranslated(data.data.translations[0].translatedText)
    };
    
    translation();
},[language, text])

    return (
        <div className="ui header">
            <h2>{translated}</h2>
        </div>
    )

}

export default Convert;