import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function BodyComponent() {
  // facciamo la fetch, ma prima settiamo l'interface dell'oggetto per dire a typescript cosa aspettarsi di ritorno
  interface anArticle {
    id: number;
    title: string;
    image_url: string;
    summary: string;
    published_at: string;
  }

  // prima di settare lo stato, qui indichiamo in useState che tipo di obj si dovrrà aspettare con un generics <>
  // dicendogli in sostanza che si dovrà aspettare un array di oggetti anArticle
  const [articles, setArticles] = useState<anArticle[]>([]);

  // ora fetchamo normalmente le API
  function fetchArticles() {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("problema chiamata API");
        }
      })
      .then(obj => {
        console.log(obj.results);
        setArticles(obj.results);
      })
      .catch(e => console.log("Errore", e));
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <BrowserRouter>
      <Container fluid className="px-0">
        <Routes>
          <Route></Route>
          <Route></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default BodyComponent;
