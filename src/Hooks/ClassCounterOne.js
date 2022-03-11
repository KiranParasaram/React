import React, { Component } from 'react'

export class ClassCounterOne extends Component {

    constructor() {
        super()
        this.state = {

            count: 0
        }
    }

    componentDidMount() {
        console.log('mounting');
        document.title = `counted ${this.state.count} times`
    }

    componentDidUpdate() {
        console.log('updated');
        document.title = `counted ${this.state.count}`
    }

    render() {
        return (
            <div>

                <button onClick={() => this.setState({ count: this.state.count + 1 })}>on click</button>

            </div>
        )
    }
}

export default ClassCounterOne