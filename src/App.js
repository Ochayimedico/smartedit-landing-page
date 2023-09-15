import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Checkout from "./components/paystack/Checkout";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="paystack-checkout-form" element={<Checkout />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
