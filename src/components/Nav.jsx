import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className={"white-bg"}>
      <ul className={"nav-bar"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Users</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
