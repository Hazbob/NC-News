import {useState} from "react";
import {Link} from "react-router-dom";

function TopicCards(){
    const [topics, setTopics] = useState([])

    return <ul>
        <li><Link to="/?topic=coding"><h1>coding</h1></Link></li>
        <li><Link to="/?topic=cooking"><h1>cooking</h1></Link></li>
        <li><Link to="/?topic=football"><h1>football</h1></Link></li>
    </ul>

}

export default TopicCards