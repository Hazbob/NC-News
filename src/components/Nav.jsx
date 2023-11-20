import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className={"white-bg"}>
      <ul className={"nav-bar"}>
        <li className={"nav-btn"}>
          <Link className={"link-text"} to="/">
            Home
          </Link>
        </li>
        {/*<li className={"nav-btn"}>*/}
        {/*  <Link className={"link-text"} to="/">*/}
        {/*    Users*/}
        {/*  </Link>*/}
        {/*</li>*/}
      </ul>
    </nav>
  );
}
export default Nav;
