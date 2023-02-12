import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import About from "./pages/About";
import MyApp from "./pages/MyApp";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/myApp/:appId" element={<MyApp />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
};

export default App;
