import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyCard from "./MyCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHipHopAction, getPopAction, getRockAction } from "../Redux/ACTIONS";

const Main = () => {
  const endpointRock = "https://striveschool-api.herokuapp.com/api/deezer/search?q=rock%20classics";
  const endpointPop = "https://striveschool-api.herokuapp.com/api/deezer/search?q=pop";
  const endpointHipPop = "https://striveschool-api.herokuapp.com/api/deezer/search?q=hip%20pop";
  const dispatch = useDispatch();
  const pop = useSelector((state) => state.home.pop);
  const rock = useSelector((state) => state.home.rock);
  const hiphop = useSelector((state) => state.home.hiphop);

  useEffect(() => {
    dispatch(getRockAction(endpointRock));
    dispatch(getPopAction(endpointPop));
    dispatch(getHipHopAction(endpointHipPop));
  }, []);
  return (
    <>
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <Link to="/">TRENDING</Link>
          <Link to="/">PODCAST</Link>
          <Link to="/">MOODS AND GENRES</Link>
          <Link to="/">NEW RELEASES</Link>
          <Link to="/">DISCOVER</Link>
        </Col>
      </Row>

      <Row>
        <Col xs={10}>
          <div id="searchResults" style={{ display: "none" }}>
            <h2>Search Results</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              <Col className="text-center" id="id">
                <MyCard />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2>Rock Classics</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
              {rock.map((song) => (
                <Col key={song.id} className="text-center" id="id">
                  <MyCard />
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
              {pop.map((song) => (
                <Col key={song.id} className="text-center" id="id">
                  <MyCard />
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={10}>
          <div id="hiphop">
            <h2>HipHop</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
              {hiphop.map((song) => (
                <Col key={song.id} className="text-center" id="id">
                  <MyCard />
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Main;
