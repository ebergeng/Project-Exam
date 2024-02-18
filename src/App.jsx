import { Routes, Route, BrowserRouter } from "react-router-dom";
import LayOut from "./js/layout/Layout";
import HomePage from "./js/pages/HomePage";
import VenuePage from "./js/pages/VenuePage";
import ProfilePage from "./js/pages/ProfilePage";
import useProfileStore from "./js/storage/profileStore";
import ManagerPage from "./js/pages/ManagerPage";

function App() {
  const profile = useProfileStore((state) => state.profile);

  return (
    <BrowserRouter>
      <LayOut>
        {!profile.venueManager ? (
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/venue/:id" element={<VenuePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        ) : (
          <Routes>
            <Route index element={<ManagerPage />} />
          </Routes>
        )}
      </LayOut>
    </BrowserRouter>
  );
}

export default App;
