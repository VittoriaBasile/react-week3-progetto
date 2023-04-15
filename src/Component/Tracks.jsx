import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { tracklistAction } from "../Redux/ACTIONS";

const Tracks = () => {
  const dispatch = useDispatch();
  const artist = useSelector((state) => state.artist.album);
  const tracksEndpoint = `https://striveschool-api.herokuapp.com/api/deezer/artist/${artist.id}/top?limit=50`;
  useEffect(() => {
    dispatch(tracklistAction(tracksEndpoint));
  }, []);
  const tracks = useSelector((state) => state.tracklist);
  console.log(tracks);
  return (
    <Container>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
};
export default Tracks;
