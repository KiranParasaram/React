import React, { Component } from 'react'

export class PassingdatafromChildtoParent extends Component {

//    constructor(props){
//        super(props)
//        this.state={
//                  chamin:this.props.data
//        }
//    }

clickhandle=()=>{
      this.props.data('kumar ')
  }
         
  render() {
             console.log(this.props.data);
    return (
      <div>
          <h1>{this.props.data}</h1> 
          PassingdatafromChildtoParent
        
         <button onClick={this.clickhandle}>on click</button>
     </div>
    )
  }
}

export default PassingdatafromChildtoParent