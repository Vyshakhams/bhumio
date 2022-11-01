import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data/projectsData";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Allprojectbudgetplot from "./components/Allprojectbudgetplot";
import Menu from "./components/Menu";
import DownlaodPDF from "./components/DownloadPDF";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Dashboard data={data} />} />
          <Route path="cart/:id" element={<Cart />} />
          <Route path="report/pdfreport" element={<DownlaodPDF />} />
          <Route
            path="report/allprojectbudgetplot"
            element={<Allprojectbudgetplot />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
