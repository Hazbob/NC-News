import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import Loader from "../Loader.jsx";
import {getArticles} from "../../api.js";

function AllArticles(){
    const [articles, setArticles] = useState([])
    const [isLoading, setLoading] = useState(true)

    async function getAllArticles(){
        const res = await getArticles()
        const {articles} = res.data
        const articlesCards = articles.map((article, index)=>{
            let classToAdd;
            classToAdd = index ===0 ? 'link-route-first' : 'link-route'
            return  <li data-id={article.article_id} className={'article-card'} key={article.title + index}><Link className={classToAdd} to={`article/${article.article_id}`}>
                <img src={article.article_img_url} alt='image relating to headline'/>
                <h2>{article.title}</h2>
                <p>Votes: {article.votes}</p>
            </Link></li>
        })


        setArticles(articlesCards)
        setLoading(false)
    }

    useEffect(() => {
        getAllArticles(setArticles)

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