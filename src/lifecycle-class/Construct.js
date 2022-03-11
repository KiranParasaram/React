import React, { Component } from 'react'

 class Construct extends Component {

   constructor(){
       super()        //it is used to call constructor from its parent class (i:e,React.Component) 
       this.state={
           name:'CONSRTRUCTOR METHOD'
       }
       this.clickhandle = this.clickhandle.bind(this)   //4th way of event binding
   }

   clickhandle(){
    console.log('hey',this);
       this.setState({
           name:'bbskjckj'
       })
     
   }

  render() {
    return (
      <div>
          Construct {this.state.name}
          <button onClick={this.clickhandle}>click</button>
      </div>
    )
  }
}

export default Construct