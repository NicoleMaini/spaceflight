import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import { Row } from "react-bootstrap";
import { AnArticle } from "../interfaces/ObjArticle"; // ecco importato l'interfaccia necessaria

function BodyComponent() {
  // facciamo la fetch, ma prima settiamo l'interface dell'oggetto per dire a typescript cosa aspettarsi di ritorno
  // solo che quest'oggetto ci servirà anche nell'altro componente, quindi lo estraiamo, lo mettiamo in un file a parte e lo
  // lo importiamo in entrambi i componenti
  // interface anArticle {
  //   id: number;
  //   title: string;
  //   image_url: string;
  //   summary: string;
  //   published_at: string;
  // }

  // prima di settare lo stato, qui indichiamo in useState che tipo di obj si dovrrà aspettare con un generics <>
  // dicendogli in sostanza che si dovrà aspettare un array di oggetti anArticle
  const [articles, setArticles] = useState<AnArticle[]>([]);

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
    <>
      {articles.map(art => (
        <Row key={art.id}>
          <CardComponent article={art} />
        </Row>
      ))}
    </>
  );
}

export default BodyComponent;
