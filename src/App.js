import React from 'react'
import { Provider } from 'react-redux'

import OurCounter from './REDUX PART 3 SAGA/OurCounter'
import  store  from './REDUX PART 3 SAGA/store'

const App = () => {
  return (
    <div>
        <Provider store={store}>
             <OurCounter/>
        </Provider>
    </div>
  )
}

export default App