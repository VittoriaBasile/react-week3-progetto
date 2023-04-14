import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainArtist = () => {
  return (
    <>
      <Row className="mb-3">
        <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <Link to="/">TRENDING</Link>
          <Link to="/">PODCAST</Link>
          <Link to="/">MOODS AND GENRES</Link>
          <Link to="/">NEW RELEASES</Link>
          <Link to="/">DISCOVER</Link>
        </Col>
      </Row>

      <Row>
        <Col className="col-12 col-md-10 col-lg-10 mt-5">
          <h2 className="titleMain"></h2>
          <div id="followers"></div>
          <div className="d-flex justify-content-center" id="button-container">
            <Button className="btn btn-success mr-2 mainButton d-none" id="playButton">
              PLAY
            </Button>
            <Button className="btn btn-outline-light mainButton d-none" id="followButton">
              FOLLOW
            </Button>
          </div>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col className="col-10 offset-1 col-md-10 col-lg-10 p-0">
          <div className="mt-4 d-flex justify-content-start">
            <h2 className="text-white font-weight-bold">Tracks</h2>
          </div>
          <div className="pt-5 mb-5">
            <Row id="apiLoaded"></Row>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default MainArtist;
