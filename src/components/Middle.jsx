import React from 'react'
import CreateTweet from './CreateTweet'
import AllTweets from './AllTweets'

function Middle(props) {
  return (
    <main>
                <div className='top-bar'>
                    <h2 className="title">Home</h2>
                </div>

                <CreateTweet addTweet={props.addTweet} loggedInUser={props.loggedInUser} setCreateTweetContent={props.setCreateTweetContent} createTweetContent={props.createTweetContent} />

                <div className="show-more-tweets">
                    <p>Show 35 Tweets</p>
                </div>

                <AllTweets tweets={props.tweets}/>
            </main>
  )
}

export default Middle