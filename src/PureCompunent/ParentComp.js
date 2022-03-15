import React, { Component } from 'react'
import PureCompo from './PureCompo'
import RegularCompo from './RegularCompo'

 class ParentComp extends Component {

   constructor(props){
       super(props)
       this.state={
           name:'kiran'
       }
   }

   componentDidMount(){
       setInterval(()=>{

          this.setState({
             name:'kiran'
          })

       },5000)
   }

  render() {
     console.log("*********Pararent Component***********");
    return (
      <div>
          ParentComp
          <RegularCompo Name={this.state.name}/>
          <PureCompo  Name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp