import { useState, useEffect } from "react";
import { getSinglePositionFromApi } from "../services/positionService";
import ReactPlayer from "react-player";
import "./SinglePosition.css";
import {
  getSingleTechniqueFromApi,
  getTechniquesFromApi,
} from "../services/techniqueService";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import { Row, Col } from "react-bootstrap";
import TechniqueCard from "../components/TechniqueCard";

const SingleTechniqueView = ({ match }) => {
  const [technique, setTechnique] = useState([]);
  const [techniques, setTechniques] = useState([]);
  // const [position, setPosition] = useState([]);
  const { id } = match.params;

  useEffect(() => {
    getSingleTechnique();
  }, [id]);

  // useEffect(() => {
  //   getSinglePosition();
  // }, [technique.position._id])

  useEffect(() => {
    getTechniques();
  }, []);

  const getSingleTechnique = async () => {
    const response = await getSingleTechniqueFromApi(id);
    setTechnique(response.data);
  };

  const getTechniques = async () => {
    const response = await getTechniquesFromApi();
    setTechniques(response.data);
  };

  // const getSinglePosition = async () => {
  //   const response = await getSinglePositionFromApi(technique.position._id);
  //   setPosition(response.data);
  // };

  return (
    <div className="container" style={{marginBottom: "40px"}}>
      <h2>{technique.name}</h2>
      <img src={technique.img} alt="" className="singleImage" />
      <p className="description">{technique.description}</p>
      <ReactPlayer url={technique.video} style={{ margin: "auto" }} />
      {technique && technique.position && technique.position.name && (
        <h3>
          Other techniques from{" "}
          <a id="related" href={`/positions/${technique.position._id}`} style={{textDecoration: 'none'}}>
            {technique.position.name}
          </a>
        </h3>
      )}
      <Row xs={1} md={3} className="g-4">
        {technique &&
          technique.position &&
          technique.position._id &&
          techniques.map((tech) => {
            if (tech.approved === "true" && tech.position === technique.position._id && tech._id !== technique._id) {
              return (
                <div>
                  <Col>
                    <TechniqueCard props={tech} />
                  </Col>
                </div>
              );
            }
          })}
      </Row>
    </div>
  );
};

export default SingleTechniqueView;
