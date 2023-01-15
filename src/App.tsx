import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<About />} />
          <Route
            path={`${process.env.PUBLIC_URL}/portfolio`}
            element={<Portfolio />}
          />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
};

export default App;
