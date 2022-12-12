import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import TermsAndCondtions from "./pages/FooterLegalSection/TermsAndConditions";
import PrivacyPolicy from "./pages/FooterLegalSection/PrivacyPolicy";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AboutUs from "./pages/FooterInformationSection/AboutUs";
import ContacUs from "./pages/FooterInformationSection/ContacUs";
import SignIn from "./pages/Sign-In-Up/SignIn";
import SignUp from "./pages/Sign-In-Up/SignUp";
import { GlobalContextState } from "./store-context/globalContext";
import { Products } from "./pages/Shop/Products";
import { Bestseller } from "./pages/Shop/per-category/Bestseller";
import { LimitedEdition } from "./pages/Shop/per-category/LimitedEdition";
import { WomanWatch } from "./pages/Shop/per-category/WomanWatch";
import { ManWatch } from "./pages/Shop/per-category/ManWatch";
import { KidsWatch } from "./pages/Shop/per-category/KidsWatch";
import { SingleProduct } from "./pages/Shop/sigle-product/SingleProduct";
import { Cart } from "./pages/Cart/Cart";
import ContactUsNavbar from "./pages/ContactUsNavbar/ContactUsNavbar";
import InfoPayment from "./pages/Information";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <GlobalContextState>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/products" element={<Products />}>
              <Route path="bestseller" element={<Bestseller />} />
              <Route path="limited-edition" element={<LimitedEdition />} />
              <Route path="woman-watch" element={<WomanWatch />} />
              <Route path="men-watch" element={<ManWatch />} />
              <Route path="kids-watch" element={<KidsWatch />} />
            </Route>
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="/contact-us" element={<ContactUsNavbar />} />
            <Route path="/information" element={<InfoPayment />} />


            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContacUs />} />

            <Route path="/terms&conditions" element={<TermsAndCondtions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </GlobalContextState>
        <Footer />
      </Router>
    </>
  );
}

export default App;
