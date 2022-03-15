import React, { Component } from 'react'

export class Form extends Component {

   constructor(){
       super()
       this.state={
           username:'',
           texthere:""
       }
   }

   handleUsernameChange=(event)=>{
    console.log(event.target.value,"typing...");
       this.setState({
          username:event.target.value.toUpperCase()
       })
   }
   handleTextareaChange=(event)=>{
            this.setState({
                textarea:event.target.value
            })
   }

  render() {
    return (
      <div>
          <form>
              <label> Username: </label>
              <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
              <textarea name="" id="" cols="30" value={this.state.textarea} 
                                                          onChange={this.handleTextareaChange}></textarea>
          </form>
      </div>
    )
  }
}

export default Form



// function num(){

//     return new Promise( (resolve,reject)=>{
//           if(num==2){
//             resolve('success done')
//           }
//           else{
//             reject('failute notdone')
//           }
//     } )

// }
// num(3)

// .then( (response)=>{
//          console.log(response);
//          document.write(response)
// } )
// .catch( (error)=>{
//     console.log(error);
//     document.write(error)
// } )