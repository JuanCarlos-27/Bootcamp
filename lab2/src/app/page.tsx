import { Button, Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="text-center">
      <h1>Welcome to My Page</h1>
      <Row>
        <Col>
          Uno
        </Col>
        <Col>
          Dos
        </Col>
      </Row>
      <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <Button variant="primary">Learn more</Button>
    </Container>
  );
}
