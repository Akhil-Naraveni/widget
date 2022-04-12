import React, { useState, useEffect, useRef } from "react";


const Dropdown = ({ label, options, select, onSelectChange }) => {
const [open, setOpen] = useState(false);
const ref = useRef();

useEffect(()=>{
    const onBodyClick = (event) =>{
        if(ref.current.contains(event.target)){
            return;
        }
        setOpen(false)
    }
    document.body.addEventListener('click',onBodyClick)
    return () => {
        document.body.removeEventListener('click',onBodyClick);
    };
},[]);

    const renderedOptions = options.map((j) => {
        if (j.value === select.value){
            return null;
        }
        
        return (
            <div key={j.value} className="item" onClick={()=>onSelectChange(j)}>
            {j.label}
            </div>
        )
    }

    )

    return (
        <div  ref = {ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={()=> setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active':'' }`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{select.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        { renderedOptions }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;