import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../product/pages/home";
import Contact from "../product/pages/contact";
import Shop from "../product/pages/shop";
import About from "../product/pages/about";
import Blog from "../product/pages/blog";
import SantaBeatriz from "../product/pages/santaBeatriz";
<<<<<<< HEAD
import Prey from "../product/pages/prey";
=======
import Vocation from "../product/pages/vocation";
>>>>>>> f7f32ad1d51f54e7bab8eb96d820ba4e492635d6

export const Routelist = {
  HOME: "/home",
  CONTACT: "/contact",
  SHOP: "/shop",
  ABOUT: "/about",
  BLOG: "/blog",
  SANTABEATRIZ: "/santaBeatriz",
<<<<<<< HEAD
  PREY: "/prey",
=======
  VOCATION: "/vocation",
>>>>>>> f7f32ad1d51f54e7bab8eb96d820ba4e492635d6
};

export default function RoutesConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Routelist.HOME} element={<Home />} />
        <Route path={Routelist.VOCATION} element={<Vocation />} />
        <Route path={Routelist.CONTACT} element={<Contact />} />
        <Route path={Routelist.SHOP} element={<Shop />} />
        <Route path={Routelist.ABOUT} element={<About />} />
        <Route path={Routelist.BLOG} element={<Blog />} />
        <Route path={Routelist.SANTABEATRIZ} element={<SantaBeatriz />} />
        <Route path={Routelist.PREY} element={<Prey />} />
      </Routes>
    </BrowserRouter>
  );
}
