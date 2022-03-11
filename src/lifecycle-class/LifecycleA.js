import React , {Component} from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends  Component{

    constructor(){
        super()      //it is used to call constructor from its parent class (i:e,React.Component) 

        this.state={
            name:'kiran'   //previosly stats are difine like this in constructor method 
        }
        console.log('LifecycleA - constructor method');
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA - getDerivedStateFromProps method');

        return null;
    } 

    componentDidMount(){
        console.log('LifecycleA - componentDidMount method');
    }

    render(){
        console.log('LifecycleA - render method');
        return(
            <>
           <h1> LifecycleA </h1>
           <LifecycleB/>
           </>
        )
    }
}

export default LifecycleA