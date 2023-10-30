import { useEffect, useState } from "react";

import { getArticles } from "../../api.jsx";
import Loader from "../Loader.jsx";
import SortingBar from "./SortingBar.jsx";
import TopicDrop from "../topic_components/TopicDrop.jsx";

function AllArticles({ topic, setTopic }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [sort, setSort] = useState("");

  useEffect(() => {
    getArticles(topic, sort).then((articlesCards) => {
      setArticles(articlesCards);
      setLoading(false);
    });
  }, [sort, topic]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <SortingBar setSort={setSort} sort={sort} />
        <TopicDrop setTopic={setTopic} topic={topic} />
      </nav>
      <ul className={"article-list"}>{articles}</ul>
    </div>
  );
}

export default AllArticles;
