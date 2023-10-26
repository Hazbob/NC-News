import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { getArticles } from "../../api.jsx";
import Loader from "../Loader.jsx";
import SortingBar from "./SortingBar.jsx";

function AllArticles({ topic }) {
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
      <SortingBar setSort={setSort} />
      <ul className={"article-list"}>{articles}</ul>
    </div>
  );
}

export default AllArticles;
