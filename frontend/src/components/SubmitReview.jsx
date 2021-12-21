import React, { useEffect, useState } from "react";
import axios from "axios"

function SubmitReview(props) {
    const [newReview, setNewReview] = useState({
        name:``,
        comments:``,
        ratings:``,
        place: props.id
    })
    const submit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3001/api/reviews`, {
            name: newReview.name,
            comments: newReview.comments,
            ratings: newReview.ratings,
            place: newReview.id
        })
        let anotherReview = {
            name:``,
            comments:``,
            ratings:``
        }
        setNewReview(anotherReview)
    }
    const handle = (e) => {
        const newestReview = { ...newReview }
        newestReview[e.target.id] = e.target.value
        setNewReview(newestReview)
        console.log(newestReview)
    }
    
    return (
        <div className = "reviewSection">
            <h1>Review</h1>
            <form onSubmit={(e) => submit(e)}>
                Name: <input type='text'
                    name='name'
                    value={newReview.name}
                    onChange={(e) => handle(e)}
                    type='text'
                    id='name'
                /> <br/>  <br/>
                Comment: <input type='text'
                    name='comments'
                    value={newReview.comments}
                    onChange={(e) => handle(e)}
                    type='text'
                    id='comments'
                /> <br/> <br/>
                Rating 1 to 5: <input type='text'
                    name='ratings'
                    value={newReview.ratings}
                    onChange={(e) => handle(e)}
                    type='number'
                    id='ratings'
                /><br/> <br/>
                <button className = 'button'>Submit</button>
            </form>
        </div>
    );
}
export default SubmitReview;