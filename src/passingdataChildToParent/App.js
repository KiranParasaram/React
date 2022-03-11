import React, { Component } from 'react'
import PassingdatafromChildtoParent from './PassingdatafromChildtoParent'

 class App extends Component {
     state={
         name:'webdeveloper'
     }

     

     changedata = (e) =>{
         console.log('function passing data from child to parent',e);
         this.setState({
           name:'kiran is a webdeveloper'
         })
     }
  render() {
    return (
      <div>
            <h1>{this.state.name}</h1>
          <PassingdatafromChildtoParent data={this.changedata}/>
          <h1>{this.state.name}</h1>
      </div>
    )
  }
}

export default App