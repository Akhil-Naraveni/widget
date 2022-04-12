import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";


const options = [
    {
        label : "Hindi",
        value : "hi"
    },
    {
        label : "Arabic",
        value : "ar"
    },
    {
        label : "Telugu",
        value : "te"
    }
]

const Translate = () =>{
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('')
    return (
        <div>
            <div className="ui form">
                <div className="field">
                <label> Enter a text</label>
                <input value={text} onChange = {(e) => setText(e.target.value)} />
                </div>
            </div>
            
            
        <Dropdown 
         label = "select a Language"
        options={ options} select = {language} onSelectChange = {setLanguage} /> 
        <hr/>
        <h4 className="ui header"> output</h4>
        <Convert text = {text} language = {language} />
        </div>
        
    );
}

export default Translate;