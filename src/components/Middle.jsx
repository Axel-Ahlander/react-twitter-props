import React from 'react'
import CreateTweet from './CreateTweet'

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

                {props.tweets.map((tweet, index) => {
                    return (
                        <article className='tweet' key={index}>
                            <div className="profile-icon"><img src={tweet.profileImage}/></div>

                            <div className="tweet-content">
                                <h4>{tweet.name} <span>{tweet.handle} · {tweet.date}</span></h4>
                                <p>{tweet.content}</p>

                                {tweet.article &&
                                    <div className="tweet-article">
                                        <img src={tweet.article.image} />
                                        <small>{tweet.article.site}</small>
                                        <h5>{tweet.article.title}</h5>
                                        <p>{tweet.article.content}</p>
                                    </div>
                                }

                                <div className="tweet-actions">
                                    <span>
                                        <i className="fa-regular fa-comment"></i>
                                        <small>{tweet.commentCount}</small>
                                    </span>

                                    <span>
                                        <i className="fa-solid fa-arrows-rotate"></i>
                                        <small>{tweet.retweetCount}</small>
                                    </span>

                                    <span>
                                        <i className="fa-regular fa-heart"></i>
                                        <small>{tweet.heartCount}</small>
                                    </span>

                                    <span>
                                        <i className="fa-solid fa-chart-simple"></i>
                                        <small>{tweet.analyticsCount}</small>
                                    </span>

                                    <span>
                                        <i className="fa-solid fa-upload"></i>
                                    </span>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </main>
  )
}

export default Middle