import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import New from "./components/New";
import Product from "./components/Product";
import Footer from "./components/Footer";
import SearchProducts from "./components/SearchProducts";
import Cart from "./components/Cart";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<Product />} />
          <Route path="/search" element={<SearchProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
