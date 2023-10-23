import {useEffect, useState} from "react";

function AllArticles(){
    const [articles, setArticles] = useState([])
    const [isLoading, setLoading] = useState(true)

    async function getAllArticles(){
        const res = await fetch("https://be-northcoder-news.onrender.com/api/articles")
        const {articles} = await res.json()
        const articlesCards = articles.map((article, index)=>{
            return <li className={'article-card'} key={article.title + index}>
                <img src={article.article_img_url} alt='image relating to headline'/>
                <h2>{article.title}</h2>
            </li>
        })
        setArticles(articlesCards)
        setLoading(false)
    }

    useEffect(() => {
        getAllArticles(setArticles)
    }, []);

    if(isLoading){
        return (
            <div className={"loader-holder"}>
                <div className="loader"></div>;
            </div>
        );
    }

    return <div>
    <ul className={'article-list'}>
        {articles}
    </ul>
    </div>
}

export default AllArticles