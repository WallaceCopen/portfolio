import { BrowserRouter as Router, Routes,  Route} from "react-router-dom";
import Home from './routes/HomePage';
import About from './routes/aboutPage/About';
import AboutMe from './routes/aboutPage/AboutMe'

const App: React.FC = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutMe />} />
                    <Route path="/about/:projectId" element={<About />} />
                    {/* <Route path="/stem" element={<Stemm />} /> Future Edition for School */}
                </Routes>
            </Router>
        </>
    )
}

export default App