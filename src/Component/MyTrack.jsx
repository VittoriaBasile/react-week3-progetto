import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyTrack = ({ track }) => {
  return (
    <Container fluid>
      <div className="d-flex justify-content-between align-items-center gap-5">
        <div className="text-light">
          <p className="fw-bold">{track.title}</p>
          <Link to={`/artist/${track.artist.id}`} className="text-light link">
            {track.artist.name}
          </Link>
        </div>

        <div>
          <p className="text-light">
            {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, "0")}
          </p>
        </div>
      </div>
    </Container>
  );
};
export default MyTrack;
