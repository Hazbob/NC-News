import {useState} from "react";


function Votes({votes, articleId}){
    const [currentVote, setCurrentVote] = useState(votes)
    const [disabled, setDisabled] = useState(false)

    async function changeVotes(e){
        try {
        const incOrDec = e.target.innerText === "+" ? 1 : -1

            setCurrentVote(currentVote + incOrDec)
            const articleCopy = {article_id:articleId,
                inc_votes: incOrDec
            }
            const res = await fetch(`https://be-northcoder-news.onrender.com/api/articles/${articleId}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(articleCopy)
            })
            const data = await res.json()
            setDisabled(true)

        }catch (err){
            const errorMessage = "Try again Later..."
            setCurrentVote(errorMessage)
        }

    }
    return <span><button onClick={changeVotes} disabled={disabled}>-</button>Votes: {currentVote} <button onClick={changeVotes} disabled={disabled}>+</button></span>
}
export default Votes