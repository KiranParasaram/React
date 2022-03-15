import React, { Component } from 'react'
import UpdatedComponent from './UpdatedComponent'

export class HoverComp extends Component {

//     constructor(props){
//         super(props)
//         this.state={
//             count:0
//         }
//     }

//   Hoverchange=()=>{
//      this.setState({
//          count:this.state.count+1
//      })
//   }

  render() {
       const {increment,count} = this.props
    return (
      <div>
          <h2 onMouseOver={increment}>Hover {count} times</h2>
      </div>
    )
  }
}

export default UpdatedComponent(HoverComp)