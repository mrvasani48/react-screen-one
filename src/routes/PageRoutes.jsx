import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";

const PageRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback="loading">
            <Home />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default PageRoutes;
