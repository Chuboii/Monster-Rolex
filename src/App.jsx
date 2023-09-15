import { Component, useState } from 'react'
import './Monsters.css'
import './App.css'
import List from './List'
import Main from './using functional component/Main'

class App extends Component{
 constructor(){
  super()
  this.state = {
    monsters: [],
    value: ''
  }
 }

componentDidMount(){
 fetch(" https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => this.setState({monsters: data}))
}

onChangeValues(e){
  this.setState({value:e.target.value})

}
  render(){

    let filter = this.state.monsters.filter(el =>{
    let name =  el.name.toLowerCase()
    let text = this.state.value.toLowerCase()
     return  name.includes(text)
    })




  return (
    <>
    {/*<h1>Monster Rolex</h1>
    <input type='text' name='search' placeholder='search monsters' onChange={
      (e) =>{
        this.onChangeValues(e)
      }
    } />
  
  <List filt={filter}/>*/}
  <Main/>
    </>
  )
  }
}

export default App
