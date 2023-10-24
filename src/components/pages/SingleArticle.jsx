import Header from "../Header.jsx";
import Nav from "../Nav.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";


function SingleArticle(){
    const [article, setArticle] = useState({})
    let {id} = useParams()
    async function getSingleArticle(articleId){
        const res = await fetch(`https://be-northcoder-news.onrender.com/api/articles/${articleId}`)
        const {article} = await res.json()
        console.log(article[0])
        setArticle(article[0])
    }

    useEffect(() => {
        getSingleArticle(id)
    }, []);
    return <div>
        <Header/>
        <Nav/>
        <main>
            <h1>{article.title}</h1>
            <img src={article.article_img_url} alt={`image relating to ${article.topic}`}/>
            <p>{article.body}</p>
        </main>

    </div>
}
export default SingleArticle