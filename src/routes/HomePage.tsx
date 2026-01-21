
import Header from "../components/header/Header"
import Container from "../components/Container"
import AboutSection from "../components/about/AboutSection";
import ProjectsSection from "../components/projects/Projects";
import '../theme.css';

const HomePage: React.FC = () => {

  return (
    <>
      <Container>
        <Header />
        <AboutSection />
        <ProjectsSection />
      </Container>
    </>
  );
};
export default HomePage