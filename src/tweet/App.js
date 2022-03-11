import React from 'react';
import Tweet from './Tweet';   //1st Tweet is component , 2nd tweet is file name

const testTweet = {
          message : "Something about cats.",
          gravator : "xyz",
          author : {
             handle : " @catperson",
             name : "Cat Person ABC"
            },
          likes : 2,
          retweet : 0,
          timestamp : "3 hr ago"
         }

 export function App(){
    return (
      
      <Tweet tweetdata={testTweet}/>
      
    )
}