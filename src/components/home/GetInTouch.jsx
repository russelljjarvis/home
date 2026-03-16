import React from "react";

const GetInTouch = ({ heading, message, email }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-left">{heading}</h2>
      <p className="lead text-left pb-3">
        {message}, <a href={`mailto:${email}`}>{email}</a>.
      </p>
      <p className="lead text-left pb-3">
        I am making a website at <a href="https://www.aerialvisionscience.com.au" target="_blank" rel="noreferrer noopener">www.aerialvisionscience.com.au</a> and it will be up soon.
      </p>
    </>
  );
};

export default GetInTouch;
