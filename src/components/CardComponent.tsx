import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { AnArticle } from "../interfaces/ObjArticle"; // ecco importato l'interfaccia necessaria

// ahimè però per funzionare la props, abbiamo bisogno di un oggetto che ci dica che tipo di oggetto è importato dalla props
// quindi creaiamo l'interfaccia necessaria

interface articleProps {
  article: AnArticle;
}

// e qui comunichiamo che article è l'oggeto nelle props con le stesse caratteristiche
function CardComponent({ article }: articleProps) {
  return (
    <Col md={6} lg={4}>
      <Card>
        <Card.Img variant="top" src={article.image_url} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.summary}</Card.Text>
          <Card.Text>{article.published_at}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
export default CardComponent;
