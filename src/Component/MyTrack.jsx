import { Col, Container, Row } from "react-bootstrap";

const MyTrack = ({ track }) => {
  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center gap-5">
        <div className="text-light">
          <p className="fw-bold">{track.title}</p>
          <p className="text-light">{track.artist.name}</p>
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
