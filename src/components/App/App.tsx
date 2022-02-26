import { BrowserRouter, Routes, Route } from "react-router-dom";

import ExchangeDetails from "../ExchangeDetails";
import Home from "../Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="exchanges/:exchangeId" element={<ExchangeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
