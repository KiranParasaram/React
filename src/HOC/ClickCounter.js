import React, { Component } from 'react'
import UpdatedComponent from './UpdatedComponent'

 class ClickCounter extends Component {
 
    // constructor(){
    //     super()
    //     this.state={
    //         count:0
    //     }
    // }

    // clickhandle=()=>{
    //     this.setState({
    //         count:this.state.count+1
    //     })
    // }

  render() {
      
    return (
      <div>
        <button onClick={this.props.increment}>  click {this.props.count} times  </button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter)