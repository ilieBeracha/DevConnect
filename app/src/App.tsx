import { useSelector } from "react-redux";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";

function App() {
  const authSlice = useSelector((state: any) => state.auth);

  return (
    <div className="App">
      <Routes>
        {authSlice ? 
          <Route path="*" element={"Home"}></Route>
        : 
          <Route path="*" element={<LandingPage />}></Route>
        }
      </Routes>
    </div>
  );
}

export default App;
