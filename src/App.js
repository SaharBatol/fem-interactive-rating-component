import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ratings from "./components/Ratings";
import Confirmation from "./components/Confirmation";
import { useState } from "react";

function App() {
  const [rating, setRating] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Ratings setRating={setRating} rating={rating} />}
          />
          <Route
            path="/confirmation"
            element={<Confirmation rating={rating} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
