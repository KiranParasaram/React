import React from 'react'
import { Link , NavLink, Outlet } from 'react-router-dom'

const myFunc = (isActive)=>{
      return{
          backgroundColor : isActive ? 'red' : 'black',
          color : isActive ?  'yellow' : 'blue'
      }
}

const Product = () => {
  return (
    <div style={{textAlign : 'center'}}>
        <h1>Products</h1>
        <h3>Every items are Beloe : </h3>
        <NavLink  
          style={
              ({isActive})=>{        //method 1  //line 18-23 is a anonymous function 
                  return{
                       backgroundColor : isActive ? 'green' : 'black' ,
                        color : isActive ? 'white' : 'blue'
                    }
                }
              }
        to ='/products/mobile' className='btn btn-primary' >Mobile</NavLink>

        <NavLink  
          style={                       //method 2  //line 29-31 is a anonymous function 
             ({isActive}) => {
                 return myFunc(isActive)
             }
          }
        to ='/products/laptop' className='btn btn-primary' >Laptop</NavLink>
       
       <NavLink to ='/products/watches' className='btn btn-primary'>watches</NavLink>
        <Outlet/>
    </div>
  )
}

export default Product


// <Link to ='/products/mobile' className='btn btn-success'>Mobile</Link>
// <Link to ='/products/laptop' className='btn btn-danger'>Laptop</Link>