import React, { useState } from "react"
import Accordion from "./components/Accordion"
import Search from "./components/Search"
import Dropdown from "./components/Dropdown"
import Translate from "./components/Translate"
import Route from "./components/Route" 

const items=[
    {
        title:"Why React.?",
        content:" Widely and easily used"
    },
    {
        title:"How React.?",
        content:" More of JS you can"
    },
    {
        title:"Really React .?",
        content:" Yes it was"
    }
];

const options =[
    {
        label : "The color is red",
        value : "red"
    },
    {
        label : "The color is green",
        value : "green"
    },
    {
        label : "The color is blue",
        value : "blue"
    }
];


const App = () => {
    const [select, setSelect] = useState(options[0]);
    return (
        <div>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/dropdown">
                <Dropdown options={options} label = "select a colour" select={select} onSelectChange = {setSelect}/>
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
}
export default App;