import { BrowserRouter, Routes, Route } from "react-router-dom";

import ExchangeDetails from "../ExchangeDetails";
import Home from "../Home";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="exchanges/:exchangeId" element={<ExchangeDetails />} />
    </Routes>
  </BrowserRouter>
);

export default App;
