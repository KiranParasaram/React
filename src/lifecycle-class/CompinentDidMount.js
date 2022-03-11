import React,{Component} from 'react'

class ComponentDidMount extends Component{
 
    constructor(props){
        super(props)
        this.state={
              name: this. props. propsFromCDMparent
        }
    }

    componentDidMount(){
        setTimeout( ()=>{
            this.setState({ name: 'This is componentDidMount method' })
         },4000)
       
    }

    render(){
        return(
          <h1>{this.state.name}</h1>
        )
    }
}

export default ComponentDidMount