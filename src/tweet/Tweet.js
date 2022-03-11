import React from 'react'
import Author from './Author'
import Avatar from './Avatar'
import './index.css'
import Message from './Message'
import Options from './Options'
import { Time } from './Time'

const Tweet = ({tweetdata}) => {
   console.log(tweetdata);
  return (
    <div className='tweet'>
        <Avatar hash={tweetdata.gravator}/>
        <div>
        <Author user={tweetdata.author}/>
        <Message code={tweetdata.message}/>
        <div className='button'>
        <Options retweet={tweetdata.retweet}/>
        </div>
        </div>
       <Time time={tweetdata.timestamp}/>
        {/* Tweett */}
    </div>
  )
}

export default Tweet