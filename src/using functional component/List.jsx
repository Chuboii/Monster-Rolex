export default function List({data, input}){
let filtered = data.filter(el =>{
    return el.name.toLowerCase().includes(input.toLowerCase())
})


    let list = filtered.map((el,id)=>{
    return(
      
        <div key={id} className="image">
        <img src={`https://robohash.org/${id}?set=set2`}/>
       <p>{el.name}</p>
       <p>{el.email}</p>
        </div>
        
    )
})
    return(
      <div className="container">
      {list}
      </div>
        
      
    )
}