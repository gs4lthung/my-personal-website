import React from "react";
import { Link } from "react-router-dom";

import "./ScreenError.scss";
export default function ScreenError(props) {
  const errorCode = String(props.error);
  return (
    <>
      <h1>Error {errorCode}</h1>
      <p class="zoom-area">
        <b>CSS</b> animations to make a cool {errorCode} page.{" "}
      </p>
      <section class="error-container">
        <span>{errorCode.charAt(0)}</span>
        <span>{errorCode.charAt(1)}</span>
        <span>{errorCode.charAt(2)}</span>
      </section>
      <div class="link-container">
        <Link to={""} className="more-link">
          Go to home
        </Link>
      </div>
    </>
  );
}
