import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import { AnArticle } from "../interfaces/ObjArticle"; // ecco importato l'interfaccia necessaria

// ahimè però per funzionare la props, abbiamo bisogno di un oggetto che ci dica che tipo di oggetto è importato dalla props
// quindi creaiamo l'interfaccia necessaria

interface articleProps {
  article: AnArticle;
}

// e qui comunichiamo che article è l'oggeto nelle props con le stesse caratteristiche
function CardComponent({ article }: articleProps) {
  return (
    <Col md={4} lg={3} className="p-0">
      <div className="p-2 h-100">
        <Link to={`/info-article/${article.id}`}>
          <Card className="h-100">
            <Card.Img
              variant="top"
              src={article.image_url}
              style={{ width: "100%", height: "10rem", objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column justify-content-between">
              <Card.Title>{article.title}</Card.Title>
              {/* <Card.Text>{article.summary}</Card.Text> */}
              <Card.Text>{article.published_at}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </Col>
  );
}
export default CardComponent;
