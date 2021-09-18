import { useState, useEffect } from "react";
import { getSinglePositionFromApi } from "../services/positionService";
import ReactPlayer from "react-player";
import "./SinglePosition.css";
import { getTechniquesFromApi } from "../services/techniqueService";
import TechniqueCard from "../components/TechniqueCard";
import { Row, Col } from "react-bootstrap";

const SinglePositionView = ({ match }) => {
  const [position, setPosition] = useState([]);
  const [techniques, setTechniques] = useState([]);
  const { id } = match.params;

  useEffect(() => {
    getSinglePosition();
    getTechniques();
  }, [id]);

  const getSinglePosition = async () => {
    const response = await getSinglePositionFromApi(id);
    setPosition(response.data);
  };

  const getTechniques = async () => {
    const { data } = await getTechniquesFromApi();
    setTechniques(data);
  };

  return (
    <div className="container" style={{marginBottom: '50px'}}>
      <h2>{position.name}</h2>
      <img src={position.img} alt="" className="singleImage" />
      <p className="description">{position.description}</p>
      <ReactPlayer url={position.video} style={{ margin: "auto" }} />
      <h3>Techniques from this position:</h3>
      <Row xs={1} md={3} className="g-4">
        {techniques &&
          techniques.map((technique) => {
            if (
              technique.approved === "true" &&
              technique.position === position._id
            ) {
              return (
                <div>
                  <Col>
                    <TechniqueCard props={technique} />
                  </Col>
                </div>
              );
            }
          })}
      </Row>
    </div>
  );
};

export default SinglePositionView;
