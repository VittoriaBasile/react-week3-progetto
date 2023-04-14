import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { albumAction } from "../Redux/ACTIONS";
import MyTrack from "./MyTrack";

const MainAlbum = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const albumEndpoint = `https://striveschool-api.herokuapp.com/api/deezer/album/${params.id}`;
  useEffect(() => {
    dispatch(albumAction(albumEndpoint));
  }, []);

  const album = useSelector((state) => state.album.album);
  console.log(album);
  return (
    <>
      <Row className="mb-3">
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <Link to="/">TRENDING</Link>
          <Link to="/">PODCAST</Link>
          <Link to="/">MOODS AND GENRES</Link>
          <Link to="/">NEW RELEASES</Link>
          <Link to="/">DISCOVER</Link>
        </Col>
      </Row>
      {album !== null && (
        <Row className="w-100">
          <Col md={3} className="pt-5 text-center" id="img-container">
            <img src={album.cover_medium} alt="" />
          </Col>
          <Col md={9} className="pt-5">
            <Row>
              {album.tracks.data.map((track) => (
                <Col xs={12} key={track.id} md={10} className="mb-5 offset-1">
                  <MyTrack track={track} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
};
export default MainAlbum;
