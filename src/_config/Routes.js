import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../product/pages/home";
import Contact from "../product/pages/contact";
import Shop from "../product/pages/shop";
import About from "../product/pages/about";
import Blog from "../product/pages/blog";
import SantaBeatriz from "../product/pages/santaBeatriz";

export const Routelist = {
  HOME: "/home",
  CONTACT: "/contact",
  SHOP: "/shop",
  ABOUT: "/about",
  BLOG: "/blog",
  SANTABEATRIZ: "/santaBeatriz",
};

export default function RoutesConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Routelist.HOME} element={<Home />} />
        <Route path={Routelist.CONTACT} element={<Contact />} />
        <Route path={Routelist.SHOP} element={<Shop />} />
        <Route path={Routelist.ABOUT} element={<About />} />
        <Route path={Routelist.BLOG} element={<Blog />} />
        <Route path={Routelist.SANTABEATRIZ} element={<SantaBeatriz />} />
      </Routes>
    </BrowserRouter>
  );
}
