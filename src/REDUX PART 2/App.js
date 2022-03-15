import React from 'react'
import { Provider } from 'react-redux'
import AddStudent from './AddStudent'
import store from './store'
import Student from './Student'

const App = () => {

  return (

    < Provider store={store}>
      <div>
        <AddStudent />
        {/* <Student/> */}
      </div>
    </Provider>
  )
}

export default App