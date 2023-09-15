import { useState } from "react"
import List from "./List"


export default function Input({data}){
let [value, setValue] = useState('')

let changeValue = (e) =>{
    setValue(e.target.value)
}
    return(
        <>
        <input type="text" name="search"
        value={value}
        onChange={changeValue}
        />   <List data={data} input={value}/>
        </>
    )
}