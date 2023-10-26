import Header from "../Header.jsx";
import Nav from "../Nav.jsx";
import TopicCards from "../topic_components/TopicCards.jsx";

function Topic({ setTopic }) {
  return (
    <div className={"page"}>
      <Header />
      <Nav />
      <TopicCards setTopic={setTopic} />
    </div>
  );
}

export default Topic;
