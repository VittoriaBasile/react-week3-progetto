import { Col, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { artistAction } from "../Redux/ACTIONS";
import { useEffect } from "react";
import Tracks from "./Tracks";

const MainArtist = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const artistEndpoint = `https://striveschool-api.herokuapp.com/api/deezer/artist/${params.id}`;
  useEffect(() => {
    dispatch(artistAction(artistEndpoint));
  }, []);
  const artist = useSelector((state) => state.artist.album);
  console.log(artist);
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
      {artist !== undefined && (
        <>
          <Row>
            <Col className="col-12 col-md-10 col-lg-10 mt-5 d-flex flex-column justyfy-content-center align-items-center">
              <img className="my-3" src={artist.picture_big} alt="" />
              <h2 className="titleMain">{artist.name}</h2>
              <div id="followers">followers : {artist.nb_fan.toLocaleString()}</div>
              <div className="d-flex justify-content-center" id="button-container">
                <Button className="btn btn-success mr-2 mainButton" id="playButton">
                  PLAY
                </Button>
                <Button className="btn btn-outline-light mainButton mx-4" id="followButton">
                  FOLLOW
                </Button>
              </div>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col className="col-10 offset-1 col-md-10 col-lg-10 p-0 ">
              <div className="mt-4 d-flex justify-content-start">
                <h2 className="text-white font-weight-bold">Tracks</h2>
              </div>
              <div className="pt-5 mb-5">
                <Row id="apiLoaded justify-content-start mx-0">
                  <Tracks />
                </Row>
              </div>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};
export default MainArtist;
