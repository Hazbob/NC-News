import Header from "../Header.jsx";
import Nav from "../Nav.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Loader from "../Loader.jsx";
import Comments from "../article_components/Comments.jsx";


function SingleArticle(){
    const [article, setArticle] = useState({})
    const [isLoading, setLoading] = useState(true)
    let {id} = useParams()
    async function getSingleArticle(articleId){
        const res = await fetch(`https://be-northcoder-news.onrender.com/api/articles/${articleId}`)
        const {article} = await res.json()
        setArticle(article[0])
        setLoading(false)
    }

    useEffect(() => {
        getSingleArticle(id)
    }, []);

    if(isLoading){
        return <Loader/>
    }
    return <div className={'page'}>
        <Header/>
        <Nav/>
        <main>
            <h1>{article.title}</h1>
            <img src={article.article_img_url} alt={`image relating to ${article.topic}`}/>
            <p>{article.body}</p>
        </main>
        <Comments/>

    </div>
}
export default SingleArticle