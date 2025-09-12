import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import Container from "./components/general/Container"

const App: React.FC = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Header />
      </Container>
    </>
  );
};


export default App
