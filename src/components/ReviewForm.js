import React from "react";
import { useState } from "react";
import "./MovieList.css"


export default function ReviewForm(props) {

    const [review, setReview] = useState("");
    const [reviews, setReviews] = useState([]);

    const submitReview = (e) => {
        e.preventDefault();

        const newReview = {
        description: review
        }

        console.log(newReview);

        setReviews([...reviews, newReview]);

        console.log(reviews);

        resetForm(e);


    };
  
    const resetForm = (e) => {
    e.preventDefault();
     setReview('')
    }


    
 

    return (
        <>
        <form className="form-control">
            <textarea class="form-control" value={review} rows="3" onChange={(e) => setReview(e.target.value)}>Enter Review Here</textarea>
        </form>
        <button class="btn btn-warning m-1" onClick={e => resetForm(e)}>Reset</button>
        <button class="btn btn-success m-1" disabled={review === ""} onClick={e => submitReview(e)}>Submit</button>
    
  



        <div>
           {/* <ReviewList /> */}
           {reviews.map((r, rIndex) => {
            return (<card key={rIndex}>
                <div class="container-fluid col-lg">
                    <textarea class="form-control my-1">
                    {r.description}
                    </textarea>
                </div>
            </card>
            )})}  
        </div>
        </>
    )

}











    // OLD ATTEMPTS:


     
    // const handleSubmit = () => {

    //     console.log("hey");
    //     const reviewText = document.getElementById('reviewText').value;
    //     console.log(reviewText);
    //     if (reviewText !== "") {
    //         // some function to create a div.
    //     };
        
    // }

      // function enterReview() {

        // <div>
        //     <form className="d-flex w-50">
        //         <input
        //             type="text"
        //             className="form-control"
        //         />
        //         <button className="btn btn-success ms-2" onClick={handleSubmit}>
        //             Post
        //         </button>
        //     </form>
        // </div>
    

        
        // <div>
        //     <form>
        //         <label htmlFor="textAreaExample" className="heading4">
        //             Post a Review:
        //         </label>
        //         <input
        //             type="text"
        //             id="textAreaExample"
        //             className="form-control"
        //             // value={nameValue}
        //             // onChange={(e) => setNameValue(e.target.value)}
        //         />
        //         <button className="btn btn-primary mt-2" onClick={handleSubmit}>
        //             Post
        //         </button>
        //     </form>
        // </div>

        // Modal option:

        // <div>
        // <button type="button" class="btn btn-light btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        //   Post Review
        // </button>
      
        // <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        //   <div class="modal-dialog">
        //       <div class="modal-content">
        //         <div class="modal-header">
        //             <h5 class="modal-title" id="exampleModalLabel">New Review</h5>
  
        //             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        //         </div>
        //         <div class="modal-body">
  
        //                   <form>
        //                            <div class="form-outline">
        //                                <textarea class="form-control" id="textAreaExample" rows="4">Enter your review here</textarea>
        //                            </div>
        //                   </form>
  
        //                    </div>
  
        //                   <div class="modal-footer">
        //                         <Stars />
        //                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        //                        <button type="submit" class="btn btn-primary" data-dismiss="modal" onClick={handleSubmit}>Submit</button>
        //                        <br></br>
        //                         {/* or button type="button?"  */}
        //                   </div>
        //         </div>
        //       </div>
        //   </div>
        // </div>
  

//     )

