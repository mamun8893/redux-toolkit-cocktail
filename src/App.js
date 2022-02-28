import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import SingleCocktail from "./pages/SingleCocktail";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktail-details/:id" element={<SingleCocktail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
