import  {useState} from "react";

const State = () => {
    const [total,setTotal]=useState(0);
    const [colour,selectColour]=useState("RED");
  return (
    <div style={{textAlign:"center",justifyContent:"center",marginTop:"100px",fontSize:"20px"}}>
        <button onClick={()=>setTotal(total+1)}>badhta hua</button>
        <button onClick={()=>setTotal(total-1)}>ghatta hua</button>
        <h2>value: {total}</h2>
        <br /><br />
        <h1>SELECTED COLOUR IS SHOWN:<div style={{color:colour}}>{colour}</div></h1>
        <button onClick={()=>selectColour("RED")}>Red</button>
        <button onClick={()=>selectColour("GREEN")}>Green</button>
        <button onClick={()=>selectColour("YELLOW")}>Yellow</button>
        <button onClick={()=>selectColour("BLUE")}>Blue</button>
    </div>
  )
}

export default State;