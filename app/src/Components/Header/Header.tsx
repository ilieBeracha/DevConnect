import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

function Header(): JSX.Element {
  const location = useLocation();

  const shouldShowLinks = location.pathname !== "/loginpage" && location.pathname !== "/registerpage";

  return (
    <div className="Header">
      <NavLink to={'/'}>
        <div className="HeaderTitle">
          <h3>DevConnect</h3>
        </div>
      </NavLink>

      {shouldShowLinks && (
        <div className="HeaderNav">
          <NavLink to={"/loginpage"}>Login</NavLink>
          <NavLink id="registerAnchor" to={"/registerpage"}>
            Get started
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Header;
