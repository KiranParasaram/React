import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase, decrease } from './Action/counterAction'


const OurCounter = () => {

    const dispatch = useDispatch()

    const selector = useSelector((state) => state.counterReducer)

    return (
        <div>

            {/* <button onClick={() => dispatch(decrementnumb())}>MINUS</button>

            <input type='text' value={selector} />

            <button onClick={() => dispatch(incrementnumb())}>PLUS</button> */}

            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Our Counter App</h1>
                    <p>Student Age: {selector}</p>
                    <p className='lead'>
                        <button className='btn btn-success' onClick={() => dispatch(increase())}>Increase</button>
                        <button className='btn btn-danger' onClick={() => dispatch(decrease())}>Decrease</button>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default OurCounter