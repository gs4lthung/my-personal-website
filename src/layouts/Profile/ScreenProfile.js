import React from "react";

import "./ScreenProfile.scss";
import myavt from "../../assets/images/my_avt.png";
export default function ScreenProfile() {
  return (
    <div className="form-layout">
      <img className="form-layout__img" src={myavt} alt="LTHung" />
    </div>
  );
}
