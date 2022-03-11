
import React, { Component } from 'react';


export class Messi extends Component {

    state={
        messa:'This is state'
    }
    
    render(){
        console.log(this.props);
        return(
            <>
            <h1>This is class component {this.props.Sentprop} </h1>
            <h1>{this.state.messa}</h1>
            </>
        )
    }
}

// export default Messi 