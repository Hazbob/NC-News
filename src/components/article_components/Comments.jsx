import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import formatDate from "../../utils/formatDate.js";
import Loader from "../Loader.jsx";


function Comments(){
    const [comments, setComments] = useState({})
    const [isLoading, setLoading] = useState(true)

    const {id} = useParams()

    async function getComments(articleId){
        const res = await fetch(`https://be-northcoder-news.onrender.com/api/articles/${articleId}/comments`)
        const {comments} = await res.json()

        const commentValues = comments.map((comment, index)=>{
            return <li className={'comment-card'} key={index + comment.body}>
                <p>{comment.body}</p>
                <span>By: {comment.author}</span>  <span>Votes: {comment.votes}</span> <span>Created: {formatDate(comment.created_at)}</span>
            </li>
        })
        setComments(commentValues)
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