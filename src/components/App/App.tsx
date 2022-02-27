import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../Layout";

import ExchangeDetails from "../../views/ExchangeDetails";
import Home from "../../views/Home";

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="exchanges/:exchangeId" element={<ExchangeDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
