import React from "react";
import { Link } from "react-router-dom";

import "./ScreenError.scss";
export default function ScreenError(props) {
  const errorDescription = String(props.description);
  const errorCode = String(props.error);
  return (
    <>
      <h1>Error {errorCode}</h1>
      <p class="zoom-area">{errorDescription}</p>
      <section class="error-container">
        <span>{errorCode.charAt(0)}</span>
        <span>{errorCode.charAt(1)}</span>
        <span>{errorCode.charAt(2)}</span>
      </section>
      <div class="link-container">
        <Link to={"/my-personal-website/"} className="more-link">
          Go to home
        </Link>
      </div>
    </>
  );
}
