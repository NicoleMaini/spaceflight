import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function CardComponent() {
  return (
    <Col lg={6}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
export default CardComponent;
