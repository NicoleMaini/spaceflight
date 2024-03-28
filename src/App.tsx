import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BodyComponent from "./components/BodyComponent";
import ArticleComponent from "./components/ArticleComponent";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<BodyComponent />}></Route>
          <Route path="/info-article/:id" element={<ArticleComponent />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
