import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import MyTrackArtist from "./MyTrackArtist";
import { getArtistIdAction } from "../Redux/ACTIONS";

const Tracks = () => {
  const dispatch = useDispatch();
  const artist = useSelector((state) => state.artist.album);

  useEffect(() => {
    dispatch(getArtistIdAction(artist.id));
  }, [artist.id]);
  console.log(artist);

  return (
    <Container>
      <MyTrackArtist />
    </Container>
  );
};
export default Tracks;
