import React,{ useState } from 'react'

const Hoocks = () => {
    const [name,setname] = useState('')

    const clickhandle= (event)=>{
        setname(event.target.value)
    }

  return (
    <div>
       <h1>{name}</h1>
       
       <input type="text" name='name' value={name} onChange={clickhandle}/>
       <button onClick={clickhandle}>Hoocks</button>
    </div>
  )
}

export default Hoocks