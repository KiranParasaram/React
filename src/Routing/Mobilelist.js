import React from 'react'
import { Link , Outlet } from 'react-router-dom'

const Mobilelist = () => {
  return (
    <div  style={{textAlign : 'center'}}>
        <div className="card" style={{width: '18rem'}}>

        <ul class="list-group">
              <li class="list-group-item">
                 <Link to ='/products/mobile/apple' className='btn btn-primary'>Apple</Link>
              </li>
              <li class="list-group-item">
                <Link to ="/products/mobile/mi" className='btn btn-primary'>Redmi</Link>  
              </li>
              <li class="list-group-item">
                <Link to ="/products/mobile/samsung" className='btn btn-primary'>Samsing</Link>  
              </li>
              
       </ul>
           {/* <div className="card-body">
    <h5 className="card-title">I phone</h5>
    <h6 className="card-subtitle mb-2 text-muted">RS 1,00,000/-</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>

          <div className="card-body">
    <h5 className="card-title">0ne +</h5>
    <h6 className="card-subtitle mb-2 text-muted">RS 70,000/-</h6>
    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque iste sapiente, nesciunt nisi eos excepturi maxime accusamus architecto nostrum. Ut.</p>
          </div> */}
       </div>
       <Outlet/>
    </div>
  )
}

export default Mobilelist