import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import MyTrackArtist from "./MyTrackArtist";

const Tracks = () => {
  const dispatch = useDispatch();
  const artist = useSelector((state) => state.artist.album);
  const tracksEndpoint = `https://striveschool-api.herokuapp.com/api/deezer/artist/${artist.id}/top?limit=50`;
  const [tracks, setTracks] = useState(null);
  const tracklist = (tracksEndpoint) => {
    return async () => {
      try {
        const response = await fetch(tracksEndpoint);
        if (response.ok) {
          let songs = await response.json();
          setTracks(songs);
        }
      } catch (error) {
        console.log(error);
      }
    };
  };

  useEffect(() => {
    dispatch(tracklist(tracksEndpoint));
  }, [artist]);
  console.log(tracks);
  return (
    <Container>
      {tracks !== null &&
        tracks.data.map((track) => (
          <Row key={track.id}>
            <MyTrackArtist track={track} />
          </Row>
        ))}
    </Container>
  );
};
export default Tracks;
