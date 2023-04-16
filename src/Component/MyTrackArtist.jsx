import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { tracklistAction } from "../Redux/ACTIONS";

const MyTrackArtist = () => {
  const dispatch = useDispatch();
  const artist = useSelector((state) => state.artist.album);
  console.log("id: " + artist.id);
  const tracksEndpoint = `https://striveschool-api.herokuapp.com/api/deezer/artist/${artist.id}/top?limit=50`;
  useEffect(() => {
    if (artist !== null) {
      dispatch(tracklistAction(tracksEndpoint));
    }
  }, []);

  const tracks = useSelector((state) => state.tracklist);
  console.log(tracks);
  return (
    <Container>
      {tracks !== undefined &&
        tracks.map((track) => (
          <Row key={track.id} className="my-3 text-light">
            <Col xs={2} md={1}>
              <img className="coverTrack" src={track.album.cover} alt="" />
            </Col>
            <Col xs={9} md={8} className="offset-1 mx-0">
              <p className="fs-4">{track.title}</p>
            </Col>
            <Col xs={2} className="d-none d-md-block">
              <span>
                {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, "0")}
              </span>
              <span>min</span>
            </Col>
          </Row>
        ))}
    </Container>
  );
};

export default MyTrackArtist;
