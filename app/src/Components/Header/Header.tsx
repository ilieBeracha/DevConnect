import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";
import Profile from "../Profile/Profile";

function Header(): JSX.Element {
  const location = useLocation();
  const authSlice = useSelector((state: any) => state.auth);
  const shouldShowLinks =
    location.pathname !== "/loginpage" && location.pathname !== "/registerpage";

  return (
    <div className="Header">
      <NavLink to={"/"}>
        <div className="HeaderTitle">
          <h3>DevConnect</h3>
        </div>
      </NavLink>

      {shouldShowLinks && !authSlice ? (
        <div className="HeaderNav">
          <NavLink to={"/loginpage"}>Login</NavLink>
          <NavLink id="registerAnchor" to={"/registerpage"}>
            Get started
          </NavLink>
        </div>
      ) : authSlice ? (
        <Profile />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Header;
