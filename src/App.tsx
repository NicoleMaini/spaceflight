import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BodyComponent from "./components/BodyComponent";
import BodyArticleComponent from "./components/BodyArticleComponent";

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="px-0">
        <NavbarComponent />
        <Container>
          <Routes>
            <Route path="/" element={<BodyComponent />}></Route>
            <Route path="/info-article/:id" element={<BodyArticleComponent />}></Route>
          </Routes>
        </Container>
      </Container>
    </BrowserRouter>
  );
}

export default App;
