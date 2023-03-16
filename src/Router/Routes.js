import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import AddRecord from "../Pages/AddRecord";
import EditRecord from "../Pages/EditRecord";
import PageNotFound from "../Pages/PageNotFound";
import PrivateRoute from "./PrivateRoute";

function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/add"
        element={
          <PrivateRoute>
            <AddRecord />
          </PrivateRoute>
        }></Route>
      <Route
        path="/update"
        element={
          <PrivateRoute>
            <EditRecord />
          </PrivateRoute>
        }></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
}

export default AllRoutes;
