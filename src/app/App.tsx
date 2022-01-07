import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "../components/profile/sign-in";
import CardInfoEsf from "../pages/card-ESF/cardInfoEsf";
import MainMenu from "../pages/main-menu/mainMenu";
import { PrivateRoute } from "../private-route/privateRoute";

function App() {
  return (
    <Routes>
    <Route path="/" element={<PrivateRoute />}>
      <Route path="/home" element={<MainMenu />} />
      <Route path="/ESF" element={<CardInfoEsf />} />
    </Route>
    <Route path="/login" element={<SignIn />} />
  </Routes>
  );
}

export default App;
