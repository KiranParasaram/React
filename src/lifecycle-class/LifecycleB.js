import React , {Component} from 'react'
import LifecycleA from './LifecycleA';

class LifecycleB extends  Component{

    constructor(){
        super()      //it is used to call constructor from its parent class (i:e,React.Component) 

        this.state={
            name:'kiran'   //previosly stats are difine like this in constructor method 
        }
        console.log('LifecycleB - constructor method');
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB - getDerivedStateFromProps method');

        return null;
    } 

    componentDidMount(){
        console.log('LifecycleB - componentDidMount method');
    }

    render(){
        console.log('LifecycleB - render method');
        return(
            <>
           <h1> LifecycleB </h1>
          
           </>
        )
    }
}

export default LifecycleB