import React,{ Component } from 'react'

 class ClassCounter extends Component{

      state={
          count:0
      }

     changecount = () =>{
         this.setState({
             count : this.state.count + 1
         })
     }

    render(){
        return(
            <div>              
              
                <button onClick={this.changecount}>click :</button>
                {this.state.count}
            </div>
        )
    }
}

export default ClassCounter




