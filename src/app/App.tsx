import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "../components/profile/sign-in";
import AsvInfoCard from "../pages/card-ASV/cardInfoAsv";
import CardInfoEsf from "../pages/card-ESF/cardInfoEsf";
import CardInfoKkm from "../pages/card-KKM/cardInfoKkm";
import PatentInfoCard from "../pages/card-Patent/cardInfoPatent";
import Edeclaration from "../pages/edeclaration/edeclaration";
import MainMenu from "../pages/main-menu/mainMenu";
import { PrivateRoute } from "../private-route/privateRoute";

function App() {
  return (
    <Routes>
    <Route path="/" element={<PrivateRoute />}>
      <Route path="/home" element={<MainMenu />} />
      <Route path="/ESF" element={<CardInfoEsf />} />
      <Route path="/KKM" element={<CardInfoKkm />} />
      <Route path="/Edeclaration" element={<Edeclaration />} />
      <Route path="/ASV" element={<AsvInfoCard />} />
      <Route path="/Patent" element={<PatentInfoCard />} />
    </Route>
    <Route path="/login" element={<SignIn />} />
  </Routes>
  );
}

export default App;
