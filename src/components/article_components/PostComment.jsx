import { useState } from "react";

import { postComment } from "../../api.jsx";
import formatDate from "../../utils/formatDate.js";
import CommentPostedAlert from "../comments_components/CommentPostedAlert.jsx";
import { FcCancel } from "react-icons/fc";

function PostComment({ setComments, articleId, comments }) {
  const [commentBody, setCommentBody] = useState("");
  const [posted, setPosted] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [error, setError] = useState(false);
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      if (!isLoggedIn) return;
      const commentObject = { username: "grumpy19", body: commentBody };
      setPosted(true);
      if (commentObject.body === "") {
        setError(true);
        return;
      }
      const res = await postComment(articleId, commentObject);
      const formatData = (
        <li className={"comment-card"} key={res.data.body}>
          <p>{res.data.body}</p>
          <span>By: {res.data.author}</span>{" "}
          <span>votes: {res.data.votes}</span>{" "}
          <span>Created: {formatDate(res.data.created_at)}</span>
        </li>
      );
      setComments([formatData, ...comments]);
      setCommentBody("");
    } catch (err) {
      console.log(err);
    }
  }
  if (posted) {
    return <CommentPostedAlert error={error} />;
  }
  return (
    <form className={"post-form"} onSubmit={handleSubmit}>
      <label htmlFor="commentBody">
        <input
          value={commentBody}
          id={"commentBody"}
          type="text"
          onChange={(event) => {
            setDisabled(false);
            setCommentBody(event.target.value);
          }}
        />
      </label>
      <button disabled={disabled} type={"submit"}>
        Post
      </button>
    </form>
  );
}
export default PostComment;
