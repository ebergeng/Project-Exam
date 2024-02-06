import { Routes, Route, BrowserRouter } from "react-router-dom";
import LayOut from "./js/layout/Layout";
import HomePage from "./js/pages/HomePage";
import VenuePage from "./js/pages/venuepage/VenuePage";
import ProfilePage from "./js/pages/profilepage/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <LayOut>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/venue/:id" element={<VenuePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </LayOut>
    </BrowserRouter>
  );
}

export default App;
