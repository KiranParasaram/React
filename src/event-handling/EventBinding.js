import React,{Component} from 'react';
import Rerender from './Rerender';


class EventBinding extends Component{

    state={
        messaagr:"state message",
      
    }

    //   clickhandler(){
    //       console.log(this);
     
    //       this.setState({
    //             messaagr:"updated means i:e,setState state message"
    //       })
    //   }

       clickhandler = () =>{
        console.log(this);
     
          this.setState({
                messaagr:"updated means i:e,setState state message",
               
      })
    }


    render(){
        console.log('render');
        return(
          <div>
          <h1>{this.state.messaagr}</h1>  
        
           {/* <button onClick={ this.clickhandler.bind(this) }>EventBinding Click</button>  //1st method of event binding
           <button onClick={ () =>this.clickhandler() }>EventBinding Click</button>   //2nd method */}

           <button onClick={this.clickhandler }>EventBinding Click</button> //3rd method uses arrow function from (line18-24)

           {/* <button onClick={this.state.messaagr}></button> */}

         <Rerender name="d,hbvxvbvb" />
           </div>

        )
    }
}

export default EventBinding