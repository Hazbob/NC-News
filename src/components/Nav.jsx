import {Link} from "react-router-dom";

function Nav(){
    return <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to='topics'>Topics</Link></li>
            <li><Link to="users">Users</Link></li>
        </ul>
    </nav>
}
export default Nav
