import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyTrack = ({ track }) => {
  return (
    <Container>
      <Row>
        <Col xs={10} className="text-light offset">
          <p>{track.title}</p>

          <p>{track.artist.name}</p>
        </Col>
        <Col className="text-light ms-1">
          <p>
            {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, "0")}s
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default MyTrack;
