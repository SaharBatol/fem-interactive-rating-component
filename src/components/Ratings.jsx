import React from "react";
import star from "../images/icon-star.svg";
import { Link } from "react-router-dom";

const Ratings = ({ setRating, rating }) => {
  return (
    <div className="outer-container">
      <div className="container">
        <div className="image-container">
          <img src={star} alt="star" />
        </div>
        <h1 className="title">How did we do?</h1>
        <h2>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </h2>

        <div className="rating-container">
          <button
            className={`ratings ${rating === 1 ? "selected" : ""}`}
            onClick={() => setRating(1)}
          >
            1
          </button>
          <button
            className={`ratings ${rating === 2 ? "selected" : ""}`}
            onClick={() => setRating(2)}
          >
            2
          </button>
          <button
            className={`ratings ${rating === 3 ? "selected" : ""}`}
            onClick={() => setRating(3)}
          >
            3
          </button>
          <button
            className={`ratings ${rating === 4 ? "selected" : ""}`}
            onClick={() => setRating(4)}
          >
            4
          </button>
          <button
            className={`ratings ${rating === 5 ? "selected" : ""}`}
            onClick={() => setRating(5)}
          >
            5
          </button>
        </div>
        <Link to={rating ? "/confirmation" : "/"}>
          <button id="submit">SUBMIT</button>
        </Link>
      </div>
    </div>
  );
};

export default Ratings;
