import React ,{Component} from 'react';

class Getderived extends Component{

    constructor(props){
        super(props)
        this.state={
             name:this.props.propsdataFromParent
            // name:'Constructor method'
        }
    }

    // static getDerivedStateFromProps(props,state){

    //      return { name : props.propsdataFromParent}   //in this return always returns object (i:e,{}) // .propsdata...value is from parent component props
    // }

    render(){
        return(
            <h1>This is a  { this.state.name  }</h1>
        )
    }
}

export default Getderived