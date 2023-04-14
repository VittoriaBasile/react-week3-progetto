import { Col, Container, Row } from "react-bootstrap";
import MyNav from "./MyNav";
import Player from "./MyPlayer";
import MainAlbum from "./MainAlbum";

const Album = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <MyNav />
        </Col>
        <Col xs={12} md={9} className="offset-md-3 mainPage">
          <MainAlbum />
        </Col>
      </Row>
      <Player />
    </Container>
  );
};
export default Album;
