import Header from "../Header.jsx";
import Nav from "../Nav.jsx";
import AllArticles from "../home_components/AllArticles.jsx";

function Home(){
    return <div className={'page'}>
        <Header/>
        <Nav/>
        <AllArticles/>
    </div>

}
export default Home