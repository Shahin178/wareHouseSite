import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ActiveList from "./components/ActiveList/ActiveList";
import DetailPage from "./components/DetailPage/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/activeList" element={<ActiveList />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
