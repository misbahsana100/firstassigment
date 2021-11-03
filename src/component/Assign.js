
import React,{useState} from "react";
const Cities =()=>{
    const  [cities,setCities] = useState(['lahore','karachi','islamabad'])
    return(
        <div>
      {
          cities.map((item,index)=>(
              <div key ={index}>{item}</div>
    ))
      }
    


</div>
    )}
    export default Cities;

// import React,{useState} from "react";
// function First() {
//   const[items,setItems] = useState([])
//   const addItem =()=>{
// setItems([...items,{
//   id:items.length,
//   value:Math.floor(Math.random()*5) + 1
// }])
//   }
//   return(
//     <div>
//       <button onClick={addItem}>Add a number</button>
//       <ul>
//         {items.map(item=>(
//           <li key={item.id}>{item.value}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }
// export default First

// import React, { useState } from 'react';

// function hook() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

// export default hook
