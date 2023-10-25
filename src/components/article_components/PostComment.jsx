import {useState} from "react";

import {postComment} from "../../api.js";
import formatDate from "../../utils/formatDate.js";
import Loader from "../Loader.jsx";

function PostComment({setComments, articleId, comments}){
    const [commentBody, setCommentBody] = useState("")
    const [isLoading, setLoading] = useState(true)
    async function handleSubmit(e){
        e.preventDefault()
        const commentObject = {username: "grumpy19", body: commentBody}
        const res = await postComment(articleId, commentObject)
        const formatData =  <li className={'comment-card'} key={res.data.body}>
            <p>{res.data.body}</p>
            <span>By: {res.data.author}</span>  <span>votes: {res.data.votes}</span> <span>Created: {formatDate(res.data.created_at)}</span>
        </li>
        setComments([formatData, ...comments])
        setLoading(false)



    }
    return <form onSubmit={handleSubmit} >
        <label htmlFor="commentBody">
            <input value={commentBody} id={"commentBody"} type="text" onChange={event => setCommentBody(event.target.value)}/>
        </label>
        <button type={"submit"}>Post</button>
    </form>
}
export default PostComment
