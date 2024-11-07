//Tweet.js
import React, { useState } from 'react';

/* 
Create a new componnet called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can ue whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/

function Tweet(props:any){
    //props contains each tweet with id, username, content, likes, and timestamp
    const[liked, setLiked] = useState(false); 
    const[count, setCount] = useState(props.likes)

    let likedHeart = "🩶";

    if(liked) // red heart 
        likedHeart = "❤️"

    return(

        <>
            <div className="tweet">
                {/* username  MAKE BOLD*/}
                <h3> @{props.username} </h3>
                {/* content a little bigger*/}
                <p> {props.content} </p>
                {/* timestamp a little smaller*/}
                <p> {props.timestamp} ago</p>
                {/* display likes with correct emoji */}
                <button onClick={updateLikes}> {likedHeart} {count} likes</button>
            </div>
        </>

    )

    function updateLikes(){
        if(liked){
            setCount(count-1)
            setLiked(false)
        }
        else{
            setCount(count+1)
            setLiked(true)
        }
    }

}






export default Tweet;
