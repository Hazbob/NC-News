import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import Loader from "../Loader.jsx";
import {getArticles} from "../../api.jsx";

function AllArticles(){
    const [articles, setArticles] = useState([])
    const [isLoading, setLoading] = useState(true)
    let location = useLocation()
    let query = new URLSearchParams(location.search).get('topic')






    useEffect(() => {
        getArticles(query).then(articlesCards=>{
        setArticles(articlesCards)
        setLoading(false)
        })

    }, [query]);

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