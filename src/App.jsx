import "./App.css";
import Home from "./components/pages/Home.jsx";
import SingleArticle from "./components/pages/SingleArticle.jsx";

import { Routes, Route } from "react-router-dom";
import Topic from "./components/pages/Topic.jsx";
import { useState } from "react";
import PathNotFound from "./components/pages/PathNotFound.jsx";

function App() {
  const [topic, setTopic] = useState("");
  return (
    <div>
      <Routes>
        <Route path="" element={<Home topic={topic} />} />
        <Route path="article/:id" element={<SingleArticle />} />
        <Route path="topics" element={<Topic setTopic={setTopic} />} />
        <Route path="*" element={<PathNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
