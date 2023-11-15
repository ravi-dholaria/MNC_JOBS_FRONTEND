import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import Layout from "./components/Layout";
import Home from "./components/Home";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 