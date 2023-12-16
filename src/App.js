import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header/Header";
import Background from "./layouts/Background/Background";
import ScreenLazyLoad from "./layouts/ScreenLazyLoad/ScreenLazyLoad";
const ScreenHome = lazy(() => import("./layouts/ScreenHome/ScreenHome"));
const ScreenProfile = lazy(() => import("./layouts/Profile/ScreenProfile"));
const ScreenError = lazy(() => import("./layouts/ScreenError/ScreenError"));

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Background />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<ScreenLazyLoad />}>
                <ScreenHome />
              </Suspense>
            }
          />
          <Route
            path="profile"
            element={
              <Suspense fallback={<ScreenLazyLoad />}>
                <ScreenProfile />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<ScreenLazyLoad />}>
                <ScreenError error={404} />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
