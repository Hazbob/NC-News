import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import Loader from "../Loader.jsx";
import {getArticles} from "../../api.jsx";

function AllArticles(){
    const [articles, setArticles] = useState([])
    const [isLoading, setLoading] = useState(true)






    useEffect(() => {
        getArticles().then(articlesCards=>{
        setArticles(articlesCards)
        setLoading(false)
        })

    }, []);

    if(isLoading){
        return <Loader/>
    }

    return <div>
    <ul className={'article-list'}>
        {articles}
    </ul>
    </div>
}

export default AllArticles