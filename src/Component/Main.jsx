import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyCard from "./MyCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHipHopAction, getPopAction, getQueryAction, getRockAction } from "../Redux/ACTIONS/index";

const Main = () => {
  const rockSongs = useSelector((state) => state.home.rock);
  const popSongs = useSelector((state) => state.home.pop);
  const hipHopSongs = useSelector((state) => state.home.hiphop);
  const search = useSelector((state) => state.home.search);
  const query = useSelector((state) => state.home.query);
  const rockEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=rock%20classics";
  const popEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=pop%20culture";
  const hipHopEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=hip%20hop";
  const searchEndpoint = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockAction(rockEndpoint));
    dispatch(getPopAction(popEndpoint));
    dispatch(getHipHopAction(hipHopEndpoint));

    if (query !== "") {
      dispatch(getQueryAction(query));
    }
  }, [query]);

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
      {search.length > 0 && (
        <>
          <Row>
            <Col xs={10}>
              <div id="searchResults">
                <h2>Search Results</h2>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                  {search.map((song) => (
                    <Col key={song.id} className="text-center" id="id">
                      <MyCard song={song} />
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </>
      )}

      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2>Rock Classics</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
              {rockSongs.length > 0 && (
                <>
                  {rockSongs.slice(0, 4).map((song) => (
                    <Col key={song.id} className="text-center" id="id">
                      <MyCard song={song} />
                    </Col>
                  ))}
                </>
              )}
            </Row>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
              {popSongs.length > 0 && (
                <>
                  {popSongs.slice(0, 4).map((song) => (
                    <Col key={song.id} className="text-center" id="id">
                      <MyCard song={song} />
                    </Col>
                  ))}
                </>
              )}
            </Row>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={10}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
              {hipHopSongs.length > 0 && (
                <>
                  {hipHopSongs.slice(0, 4).map((song) => (
                    <Col key={song.id} className="text-center" id="id">
                      <MyCard song={song} />
                    </Col>
                  ))}
                </>
              )}
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Main;
