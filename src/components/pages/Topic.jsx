import Header from "../Header.jsx";
import Nav from "../Nav.jsx";
import TopicCards from "../topic_components/TopicCards.jsx";

function Topic() {
  return (
    <div className={"page"}>
      <Header />
      <Nav />
      <TopicCards />
    </div>
  );
}

export default Topic;
