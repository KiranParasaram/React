import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

const ProductDescript = () => {

    //  const params = useParams();
    const {mymobileitem} =useParams();
    //  console.log(params)
    const navigate = useNavigate()

    const mydata={
      name:'samsung',
      price : 41000
    }


  return (
     <div>
        {/* <h1>Product Name : {params.mymobileitem}</h1> */}
        <h1>Product Name : {mymobileitem}</h1>
        <button className='btn btn-warning' onClick={ ()=> navigate('/details' , { state: mydata}) }>
          Go to details</button>
    
          {/* <Link to ='/products/mobile/mobileitem' className='btn btn-warning' >Details</Link> */} // Wrong /\
          </div>
  )
}
  
export default ProductDescript