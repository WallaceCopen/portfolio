import { BrowserRouter as Router, Routes,  Route} from "react-router-dom";
import Home from './components/HomePage';
import About from './aboutPage/About';
import AboutMe from './aboutPage/AboutMe'

const App: React.FC = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutMe />} />
                    <Route path="/about/:projectId" element={<About />} />
                </Routes>
            </Router>
        </>
    )
}

export default App