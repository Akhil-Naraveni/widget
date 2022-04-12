import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () =>{
    const[word,setWord] = useState("car");
    const[result,setResults] = useState([])
    console.log(result)

    useEffect(()=> {
        const search = async ()=>{
            const { data } = await axios.get("https://en.wikipedia.org/w/api.php",{
                params : {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: word
                }
            })
            setResults(data.query.search)
        }
        if (word && !result.length){
            search();
        }else{
            const timeoutId = setTimeout(() => {
                if (word){
                    search();
                }
            },1000);
            return () => {
                clearTimeout(timeoutId);
            };
        }
            
        
        

    },[word]

    )

     const renderedItems = result.map((i) =>{
         return (
             <div key={i.pageid} className="item">
                 <div className="right floated content">
                     <a className="ui button" target='_blank' href= {`https://en.wikipedia.org?curid=${i.pageid}`}>Go to page</a>
                </div>
                 <div className="content">
                     <div className="header">
                         {i.title}
                     </div>
                     
                     <span dangerouslySetInnerHTML={{ __html : i.snippet}}></span>
                 </div>
             </div>
         )
     })
    return(
        <div>
        <div className="ui form">
            <div className="field">
                <label>Enter Something</label>
                <input 
                value={word}
                onChange = {e => setWord(e.target.value)}
                className="input" />
            </div>
            
        </div>
        <div className="renderList">
            { renderedItems}
        </div>
        </div>
    )
}

export default Search;