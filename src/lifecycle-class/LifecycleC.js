import React, { Component } from 'react'

 class LifecycleC extends Component {

  constructor(){
    super()      //it is used to call constructor from its parent class (i:e,React.Component) 

    this.state={
        name:'kiran'   //previosly stats are difine like this in constructor method 
    }
    console.log('LifecycleC - constructor method');
}

clickhandle=()=>{
  this.setState({
    name:'He is web developer'
  })
}

static getDerivedStateFromProps(props,state){
    console.log('LifecycleC - getDerivedStateFromProps method');

    return null;
} 

componentDidMount(){
    console.log('LifecycleC - componentDidMount method');
}

 shouldComponentUpdate(){
   console.log('LifecycleC - shouldComponentUpdate')
   return true
 }

 getSnapshotBeforeUpdate(){
   console.log(' LifecycleC - getSnapshotBeforeUpdate')
   return null
 }

 componentDidUpdate(){
   console.log('LifecycleC - componentDidUpdate');
 }

  render() {
    console.log('LifecycleC - render method');
    return (
      <div>
       {this.state.name}
        <button onClick={this.clickhandle}>click</button>
      </div>
    )
  }
}

export default LifecycleC