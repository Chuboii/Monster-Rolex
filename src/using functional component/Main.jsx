import { useEffect, useState } from "react";
import '../Monsters.css'
import Input from "./Input";

export default function Main(){
   let [monsters, setMonsters] = useState([])
   
   useEffect(()=>{
fetch(" https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setMonsters(data))
   }, [])

   return(
    <>
    <h1>Monster Rolex</h1>
    <Input data={monsters}/>
    </>
   )
}