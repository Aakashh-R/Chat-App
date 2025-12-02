import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import Loginpage from "./pages/LoginPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";


const App = () => {
  return (
    <div className="bg-[url('./src/assets/bgimage.svg')] bg-contain">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/loginpage" element={<Loginpage />} />
      </Routes>
    </div>
  );
};

export default App;
