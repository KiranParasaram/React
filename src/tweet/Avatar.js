import React from 'react'

const Avatar = ({hash}) => {
  let url=`https://www.pngkey.com/png/detail/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png/${hash}`
  return (
    <div>
      <img  className='avatar'  src={url} alt="" width="50px" />
    </div>
  )
}

export default Avatar
