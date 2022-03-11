import React, { Component } from 'react'

 class ClassClick extends Component {

  clickhandler(){                        //1st method of calling event-handler in class (line:5-7)
    console.log("This is class click");
  }
  
  render() {

    // function clickhandler() {      //we can use function inside class   2nd method of calling event-handler (line:11-15)
    //   return(
    //     console.log("This is class click")
    //   )
    // }

    // class clickhandler extends Component{    //we cannot use class inside class component
    //     render(){
    //       return(
    //         <>
    //         <h1>this is class click</h1>
    //         console.log("class click");
    //         </>
    //       )
    //     }
    // }

    return (
      <div>
        <button onClick={ this.clickhandler }>click from class</button>   //if we use 1st method cumpolsary to use this.
      </div>
    )
  }
}

export default ClassClick
