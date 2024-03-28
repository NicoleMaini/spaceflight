import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { AnArticle } from "../interfaces/ObjArticle";
import ArticleComponent from "./ArticleComponent";

function BodyArticleComponent() {
  const params = useParams();
  // controllo esplicito del codice. Poiché null sappiamo che l'abbiamo dato noi
  const [article, setArticle] = useState<AnArticle | null>(null);

  function fetchArticles() {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/" + params.id)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("problema chiamata API");
        }
      })
      .then(obj => {
        setArticle(obj);
      })
      .catch(e => console.log("Errore", e));
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  return <>{article && <ArticleComponent article={article} />}</>;
}

export default BodyArticleComponent;
