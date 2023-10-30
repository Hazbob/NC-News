import Header from "../Header.jsx";
import Nav from "../Nav.jsx";
import AllArticles from "../home_components/AllArticles.jsx";

function Home({ topic, setTopic }) {
  return (
    <div className={"page"}>
      <Header />
      <Nav />
      <AllArticles setTopic={setTopic} topic={topic} />
    </div>
  );
}
export default Home;
