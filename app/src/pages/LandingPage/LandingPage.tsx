import { Route, Routes } from "react-router-dom";
import "./LandingPage.css";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import Header from "../../Components/Header/Header";
import LandingPageContent from "../LandingPageContent/LandingPageContent";

function LandingPage(): JSX.Element {
    return (
        <div className="LandingPage">
            <Header />
			<Routes>
                <Route path="/" element={<LandingPageContent />}></Route>
                <Route path="/loginpage" element={<LoginPage />}></Route>
                <Route path="/registerpage" element={<RegisterPage />}></Route>
            </Routes>
        </div>
    );
}

export default LandingPage;
