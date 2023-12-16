import React, { useEffect, useRef } from "react";
import "./ScreenHome.scss";
import { startAnimation } from "./HomeService";
export default function ScreenHome() {
  const titleRef = useRef(null);
  useEffect(() => {
    const cleanupInterval = startAnimation(titleRef);
    return () => cleanupInterval();
  }, []);
  return (
    <main>
      <span>
        <p className="welcome-text">~~-Welcome to my website-~~</p>
      </span>
      <span className="Title Background">Lam Tien Hung</span>
      <p ref={titleRef} className="Title" id="text">
        Lam Tien Hung
      </p>
    </main>
  );
}
