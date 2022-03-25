import React from "react";
import thankYou from "../images/illustration-thank-you.svg";
import { Link } from "react-router-dom";

const Confirmation = ({ rating }) => {
  return (
    <>
      {rating ? (
        <div className="outer-container">
          <div className="confirm-container">
            <div className="image-c">
              <img id="confirm" src={thankYou} alt="thankYou" />
            </div>
            <div className="select">
              <h2 id="selected">You selected {rating} out of 5</h2>
            </div>
            <h1>Thank you!</h1>
            <h2>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don't hesitate to get in touch!
            </h2>
          </div>
        </div>
      ) : (
        <div className="error-container">
          <p>
            An error has occured. Please click
            <Link id="here" to="/">
              {" "}
              here{" "}
            </Link>
            to redirect.
          </p>
        </div>
      )}
    </>
  );
};

export default Confirmation;
