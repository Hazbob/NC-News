import axios from "axios";
const newsAPI = axios.create({
    baseURL: 'https://be-northcoder-news.onrender.com/api'
})

export function getArticles(){
    return newsAPI.get("/articles")
}

export async function getSingleArticle(articleId){
    const res = await newsAPI.get(`/articles/${articleId}`)
    const {article} = res.data
    return article[0]
}

export async function handleVotesChange (currentVote, setCurrentVote, setDisabled, articleId, buttonText) {
    try {
        const incOrDec = buttonText === "+" ? 1 : -1;

        setCurrentVote(currentVote + incOrDec);

        const articleCopy = {
            article_id: articleId,
            inc_votes: incOrDec
        };
        const res = await newsAPI.patch(`/articles/${articleId}`, articleCopy)

        // const res2 = await fetch(`https://be-northcoder-news.onrender.com/api/articles/${articleId}`, {
        //     method: "PATCH",
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(articleCopy)
        // });

        setDisabled(true);

    } catch (err) {
        const errorMessage = "Try again Later...";
        setCurrentVote(errorMessage);
    }
}


export async function postComment(articleId, commentBody){
    const res = await newsAPI.post(`/articles/${articleId}/comments`, commentBody)
    return res
}