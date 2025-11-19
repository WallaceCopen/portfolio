import { BrowserRouter as Router, Routes,  Route} from "react-router-dom";
import Home from './components/HomePage';
import About from './aboutPage/About';

const App: React.FC = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about/:projectId" element={<About />} />
                </Routes>
            </Router>
        </>
    )
}

export default App