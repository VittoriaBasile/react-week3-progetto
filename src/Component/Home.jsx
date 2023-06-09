import { Col, Container, Row } from "react-bootstrap";
import MyNav from "./MyNav";
import Player from "./MyPlayer";
import Main from "./Main";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <MyNav />
        </Col>
        <Col xs={12} md={9} className="offset-md-3 mainPage">
          <Main />
        </Col>
      </Row>
      <Player />
    </Container>
  );
};
export default Home;
