import { Col, Container, Row } from "react-bootstrap";

const MyTrackArtist = ({ track }) => {
  return (
    <Container>
      <Row className="my-3 text-light">
        <Col xs={9} className="offset-1 mx-0">
          <p className="fs-4">{track.title}</p>
        </Col>
        <Col xs={2}>
          <span>
            {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, "0")}
          </span>
          <span>min</span>
        </Col>
      </Row>
    </Container>
  );
};

export default MyTrackArtist;
