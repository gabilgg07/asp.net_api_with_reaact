import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
