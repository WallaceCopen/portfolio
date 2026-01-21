import { BrowserRouter as Router, Routes,  Route} from "react-router-dom";
import Home from './routes/HomePage';
import About from './routes/aboutPage/About';
import AboutMe from './routes/aboutPage/AboutMe'
import Cookie from './routes/CookieClicker';
import Navbar from "./components/navbar/Navbar";
import Layout from "./Layout";

const App: React.FC = () => {
    return (
        <>
            <Layout>
                <Router>
                    <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<AboutMe />} />
                            <Route path="/about/:projectId" element={<About />} />
                            <Route path="/cookie" element={<Cookie />} />
                            {/* <Route path="/stem" element={<Stemm />} /> Future Edition for School */}
                        </Routes>
                </Router>
            </Layout>
        </>
    )
}

export default App