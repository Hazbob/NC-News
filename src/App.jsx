import './App.css'
import Home from "./components/pages/Home.jsx";
import SingleArticle from "./components/pages/SingleArticle.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
    return <div>
        <Routes>
            <Route path = "" element={<Home/>}/>
            <Route path = "article/:id" element={<SingleArticle/>}/>
        </Routes>
    </div>
}

export default App
