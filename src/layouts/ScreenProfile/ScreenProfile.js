import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./ScreenProfile.scss";
import myavt from "../../assets/images/my_avt.png";

export default function ScreenProfile() {
  return (
    <div className="form-layout">
      <LazyLoadImage
        className="form-layout__img"
        alt="LTHung"
        effect="blur" // Apply the blur effect while loading
        src={myavt}
      />
    </div>
  );
}
