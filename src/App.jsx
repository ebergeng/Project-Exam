import { Routes, Route, BrowserRouter } from "react-router-dom";
import LayOut from "./js/layout/Layout";
import HomePage from "./js/pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <LayOut>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </LayOut>
    </BrowserRouter>
  );
}

export default App;
