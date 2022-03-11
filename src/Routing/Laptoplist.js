import React from 'react'

const Laptoplist = () => {
  return (
    <div>
        <div className="card" style={{width: '18rem'}}>
           <div className="card-body">
    <h5 className="card-title">Mac book</h5>
    <h6 className="card-subtitle mb-2 text-muted">RS 5,00,000/-</h6>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, tempore!</p>
          </div>

          <div className="card-body">
    <h5 className="card-title btn btn-primary">Lenovo</h5>
    <h6 className="card-subtitle mb-2 text-muted">RS 50,000/-</h6>
    <p className="card-text">Lorem ipsum dolor sit amet.</p>
          </div>
       </div>
    </div>
  )
}

export default Laptoplist