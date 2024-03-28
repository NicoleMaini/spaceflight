import Card from "react-bootstrap/Card";

import { AnArticle } from "../interfaces/ObjArticle";

interface articleProps {
  article: AnArticle;
}

function ArticleComponent({ article }: articleProps) {
  return (
    <Card className="bg-dark text-white mt-4">
      <Card.Header className="h3 text-center">{article.title}</Card.Header>
      <Card.Img
        src={article.image_url}
        alt="Card image"
        style={{ width: "70%", height: "30rem", objectFit: "cover", marginInline: "auto", marginBlock: "2rem" }}
      />
      <Card.Body>
        <Card.Text>{article.summary}</Card.Text>
      </Card.Body>
      <Card.Footer className="small text-end">{article.published_at}</Card.Footer>
    </Card>
  );
}

export default ArticleComponent;
