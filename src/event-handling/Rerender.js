import React,{Component} from 'react';


class Rerender extends Component{

    state={
        cardil:'war'
    }
    render(){
        console.log('re-renderr');
        return(
                 <>
                 <h2>{this.state.cardil}</h2>
                 <h3>{this.props.name}</h3>
                 <button>rerender click</button>
                 </>
        )
    }
}

export default Rerender