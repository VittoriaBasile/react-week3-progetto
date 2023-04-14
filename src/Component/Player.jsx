import { Link } from "react-router-dom";
import { Row, Col, Image, ProgressBar } from "react-bootstrap";
import shuffle from "../playerbuttons/Shuffle.png";
import previous from "../playerbuttons/Previous.png";
import next from "../playerbuttons/Next.png";
import play from "../playerbuttons/Play.png";
import repeat from "../playerbuttons/Repeat.png";

const Player = () => {
  return (
    <div className="bg-container pt-1 fixed-bottom">
      <Row className="justify-content-center">
        <Col xs={4} md={4} lg={2} className="playerControls mt-1 text-center">
          <Row>
            <Col>
              <Link to="/">
                <Image src={shuffle} alt="shuffle" />
              </Link>
            </Col>
            <Col>
              <Link to="/">
                <Image src={previous} alt="previous" />
              </Link>
            </Col>
            <Col>
              <Link to="/">
                <Image src={play} alt="play" />
              </Link>
            </Col>
            <Col>
              <Link to="/">
                <Image src={next} alt="next" />
              </Link>
            </Col>
            <Col>
              <Link to="/">
                <Image src={repeat} alt="repeat" />
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center playBar py-3">
        <Col xs={8} md={6}>
          <ProgressBar now={0} />
        </Col>
      </Row>
    </div>
  );
};

export default Player;
