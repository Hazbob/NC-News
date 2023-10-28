import axios from "axios";
import { Link } from "react-router-dom";

const newsAPI = axios.create({
  baseURL: "https://be-northcoder-news.onrender.com/api",
});

export async function getArticles(topic, sort) {
  sort = sort.toUpperCase();
  if (sort === "COMMENTS") {
    sort = "COMMENT_COUNT";
  }
  let topicStr;
  let sortStr = sort ? `?sort_by=${sort}` : "";
  if (!topic) {
    topicStr = "";
  } else {
    topicStr = `?topic=${topic}`;
  }
  const res = await newsAPI
    .get(`/articles${topicStr}${sortStr}`)
    .catch((error) => {
      console.log(error);
    });
  console.log(res);
  const { articles } = res.data;
  const articlesCards = articles.map((article, index) => {
    let classToAdd;
    classToAdd = index === 0 ? "link-route-first" : "link-route";
    return (
      <li
        data-id={article.article_id}
        className={"article-card"}
        key={article.title + index}
      >
        <Link className={classToAdd} to={`article/${article.article_id}`}>
          <img src={article.article_img_url} alt="image relating to headline" />
          <h2>{article.title}</h2>
          <p>
            Votes: {article.votes} <br />
            Comments : {article.comment_count}
          </p>
        </Link>
      </li>
    );
  });
  return articlesCards;
}

export async function getSingleArticle(articleId) {
  const res = await newsAPI.get(`/articles/${articleId}`);
  const { article } = res.data;
  return article[0];
}
export async function handleVotesChange(
  currentVote,
  setCurrentVote,
  setDisabled,
  articleId,
  buttonText,
) {
  try {
    const incOrDec = buttonText === "+" ? 1 : -1;

    setCurrentVote(currentVote + incOrDec);

    const articleCopy = {
      article_id: articleId,
      inc_votes: incOrDec,
    };
    const res = await newsAPI.patch(`/articles/${articleId}`, articleCopy);

    setDisabled(true);
  } catch (err) {
    const errorMessage = "Try again Later...";
    setCurrentVote(errorMessage);
  }
}

export async function postComment(articleId, commentBody) {
  const res = await newsAPI.post(
    `/articles/${articleId}/comments`,
    commentBody,
  );
  return res;
}

export async function deleteComment(commentID) {
  try {
    const res = await axios.get(
      `https://be-northcoder-news.onrender.com/api/comments/364`,
    );
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
