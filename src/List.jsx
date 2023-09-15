import { Component } from "react";


class List extends Component{
    constructor(){
        super()

        
    }


    render(){
      
        return(
            <div className='container'>
            {
     this.props.filt.map((el,idx) =>{
                return (
                <div className='image' key={idx}>
                  <img src={`https://robohash.org/${idx}?set=set2`}/>
                  <p>{el.name}</p>
                  </div>
                )
              })
            }
            </div>
        )
    }
}

export default List