import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, } from "react-router-dom";
import User from "./components/User.jsx";

import Temp from "./Temp.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Temp />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="users/:userId" element={<User />} />
    </Route>
  )
)
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);