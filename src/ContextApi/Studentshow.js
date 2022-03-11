import React, { useContext } from 'react'
import { dataContext } from './StudentContext'

const Studentshow = ({ name,studclass,information,deleteStud,index }) => {

    // const show = useContext(dataContext)
    // console.log(show);

    return (
        <div>

            <div className="card" style={{width: '8rem'}}>
                <div className="card-header">{name} 
                  <i onClick={()=>deleteStud(index)} class="fa fa-trash" style={{color:'red'}}aria-hidden="true"></i> </div>
                <div className="card-body">
                    <h5 className="card-title">{studclass}</h5>
                    <p className="card-text">{information}</p>
                  
                </div>
            </div>

        </div>
    )
}

export default Studentshow