import { useEffect, useState } from "react";
import TechniqueCard from "../components/TechniqueCard";
import { getTechniquesFromApi } from "../services/techniqueService";
import { Col, Row } from "react-bootstrap";

const TechniquesView = () => {
  const [techniques, setTechniques] = useState([]);

  useEffect(() => {
    getTechniques();
  }, []);

  const getTechniques = async () => {
    const response = await getTechniquesFromApi();
    setTechniques(response.data);
  };

  return (
    <div className="container" style={{marginBottom: '50px'}}>
      <h2>Techniques</h2>
      <Row xs={1} md={3} className="g-4">
        {techniques &&
          techniques.map((technique) => {
            if (technique.approved == "true") {
              return (
                <div key={technique._id}>
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

export default TechniquesView;
