import React, { Component } from "react";

const UpdatedComponent =(OriginalComponent)=>{   //THIS component IS HOC(HIGHER ORDER COMPONENT) //OriginalComponent is parameter for clickcounter component 

    class  NewComponent extends Component{   //****This class component is a component in function component (line:5-23) /and make changes in clickcounter component****** 
        constructor(){
            super()
            this.state={
                count:0
            }
        }
    
        clickhandle=()=>{
            this.setState({
                count:this.state.count+1
            })
        }
        render(){
            return <OriginalComponent count={this.state.count} increment={this.clickhandle}/>
        }
    }


    return(
          NewComponent
    )
    
}

export default UpdatedComponent