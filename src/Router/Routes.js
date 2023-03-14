import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import AddRecord from "../Pages/AddRecord";
import EditRecord from "../Pages/EditRecord";
import PageNotFound from "../Pages/PageNotFound";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/add" element={<AddRecord />}></Route>
      <Route path="/edit" element={<EditRecord />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
}

export default AllRoutes;
