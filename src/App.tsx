import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import Container from "./components/Container"
import AboutSection from "./components/about/AboutSection";
const App: React.FC = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Header />
        <AboutSection />
      </Container>
    </>
  );
};


export default App
