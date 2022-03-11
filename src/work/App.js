import React from 'react'
import Box from './Box'

let obj1={

    head:"Declarative",
    para:"React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
   
}

let obj2={

    head:"Component-Based",
    para:"Build encapsulated components that manage their own state, then compose them to make complex UIs.Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM."
   
}

let obj3={

    head:"Learn Once, Write Anywhere",
    para:"We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.React can also render on the server using Node and power mobile apps using React Native."
   
}


export const App = () => {
  return (
    <div className="container">
    <Box matter={obj1}/>
    <Box matter={obj2}/>
    <Box matter={obj3}/>
    </div>
  )
}

// export default App