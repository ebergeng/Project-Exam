import { Routes, Route, BrowserRouter } from "react-router-dom";
import LayOut from "./js/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <LayOut>
        <Routes>
          <Route />
        </Routes>
      </LayOut>
    </BrowserRouter>
  );
}

export default App;
