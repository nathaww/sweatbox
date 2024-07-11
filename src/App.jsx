import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Lenis from "lenis";
import "./App.css";
import Header from "./Components/Layout/Header";

const App = () => {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return (
    <div className="bg-primary px-2 xs:px-2 sm:px-8 lg:px-10 xl:px-12 py-4">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
