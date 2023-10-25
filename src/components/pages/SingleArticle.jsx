import Header from "../Header.jsx";
import Nav from "../Nav.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Loader from "../Loader.jsx";
import Comments from "../article_components/Comments.jsx";
import Votes from "../Votes.jsx";


function SingleArticle(){
    const [article, setArticle] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [votes, setVotes] = useState(0)
    let {id} = useParams()
    async function getSingleArticle(articleId){
        const res = await fetch(`https://be-northcoder-news.onrender.com/api/articles/${articleId}`)
        const {article} = await res.json()
        setArticle(article[0])
        setVotes(article[0].votes)
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
        <Votes votes={votes} articleId={id} article={article}/>
        <main>
            <h1>{article.title}</h1>
            <img src={article.article_img_url} alt={`image relating to ${article.topic}`}/>
            <p>{article.body}</p>
        </main>
        <Comments/>

    </div>
}
export default SingleArticle