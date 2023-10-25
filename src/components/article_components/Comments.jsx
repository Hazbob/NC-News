import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import formatDate from "../../utils/formatDate.js";
import Loader from "../Loader.jsx";
import Votes from "../Votes.jsx";


function Comments({comments, setComments}){
    const [isLoading, setLoading] = useState(true)

    const {id} = useParams()

    async function getComments(articleId){
        const res = await fetch(`https://be-northcoder-news.onrender.com/api/articles/${articleId}/comments`)
        const {comments} = await res.json()

        const commentValues = comments.map((comment, index)=>{
            return <li className={'comment-card'} key={index + comment.body}>
                <p>{comment.body}</p>
                <span>By: {comment.author}</span>  <span>votes: {comment.votes}</span> <span>Created: {formatDate(comment.created_at)}</span>
            </li>
        })
        setComments(commentValues)
        setLoading(false)
    }

    useEffect(() => {
        getComments(id)
    }, []);


    if(isLoading){
        return <Loader/>
    }
    return <section>
        <h3>Comments</h3>
        <ol>
            {comments}
        </ol>
    </section>
}

export default Comments