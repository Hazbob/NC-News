import Header from "../Header.jsx";
import Nav from "../Nav.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../Loader.jsx";
import Comments from "../article_components/Comments.jsx";
import Votes from "../Votes.jsx";
import PostComment from "../article_components/PostComment.jsx";
import { getSingleArticle } from "../../api.jsx";

function SingleArticle() {
  const [comments, setComments] = useState({});
  const [article, setArticle] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [votes, setVotes] = useState(0);
  const [error, setError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    getSingleArticle(id)
      .then((article) => {
        setArticle(article);
        setVotes(article.votes);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);
  if (error) {
    return <h1>Article Does Not Exist</h1>;
  }
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className={"page"}>
      <Header />
      <Nav />
      <Votes votes={votes} articleId={id} article={article} />
      <main>
        <h1>{article.title}</h1>
        <img
          src={article.article_img_url}
          alt={`image relating to ${article.topic}`}
        />
        <p>{article.body}</p>
      </main>
      <PostComment
        setComments={setComments}
        articleId={id}
        comments={comments}
      />
      <Comments comments={comments} setComments={setComments} />
    </div>
  );
}
export default SingleArticle;
