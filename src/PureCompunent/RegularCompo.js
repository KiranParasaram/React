import React, { Component } from 'react'

 class RegularCompo extends Component {
    render() {
         console.log("Regular component");
        return (
            <div>RegularCompo  {this.props.Name}</div>
        )
    }
}

export default RegularCompo