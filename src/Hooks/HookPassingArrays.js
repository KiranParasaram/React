import React, { useState } from 'react'

const HookPassingArrays = () => {
    
     const [items,setItems] =  useState( [] )

     const click=()=>{
         setItems( [...items,{ id: items.length , value: Math.floor(Math.random()*10) }] ) //we are trying to print like line:22
     }

  return (
    <div>

        {
            // items.map( (x) => <li key={x.id}> {x.id} {x.value} </li> )  //***Here KEY is used bcz without key whole li elemnts rerender and updates when click, but with key only the perticular elemnt is update and rerender by DOM***
            //here in key we have to pass unique identity ,if we doesn't have unique idebtity like id then use INDEX 
        }
                                        
        {
             items.map( (x,index) => <li key={index}> {x.id} {x.value} </li> )  //like this
        }
                                    
       <button onClick={click}>Add value</button>

    </div>
  )
}

export default HookPassingArrays

// // [   Array with Object
// //     {id:  ,value: },
// //     {id: ,valur: },
// //     {id: ,value: },
// //     ..
// //     ..
// //     ....
// //     ...
// //     .....
// // ]

// import React, { useState } from 'react'

// const HookCounter = () => {

//     const [ items, setItems ] = useState( ["abc","def","ged"] )
//     const [value ,setValue] = useState("")  //this is main useState
//     const [userTypeValue,setUserTypeValue] = useState([]) //This is for storing values
//     const addItem = () => {
//         // setItems( [ ...items, userTypevalue  ] )
//         setUserTypeValue( [ ...userTypeValue, value ] )
//     }


//     return (
//        <div>
//            {/* <ul>
//                { 
//                 items.map( (item) => <li key={item.id}> {item.id} {item.value} </li> ) 
//                }    
//            </ul> */}
//            {
//                userTypeValue.map( (val) => <h2>{val}</h2>  )
//            }
//            <input value={value} onChange={ (e)=>setValue(e.target.value) }/>

//            <button onClick={addItem}> Add a Number </button>
//        </div>
//     )
// }

// export default HookCounter





// // es6
// // function sum(a,b,c) {
// //     console.log(a,b,c);
// // }
// // var arrVal = [5,2,1]
// // sum(...arrVal)




// // items = [ 
// //     {
// //         id:1,
// //         value:10
