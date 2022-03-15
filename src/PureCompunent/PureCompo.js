import React, { PureComponent } from 'react'

class PureCompo extends PureComponent{
    render(){
        console.log("Pure component");
        return(
           <div>
                PureCompo  {this.props.Name}
           </div>
        )
    }
}

export  default PureCompo 