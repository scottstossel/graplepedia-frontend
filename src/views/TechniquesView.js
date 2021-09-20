import { useEffect, useState } from "react";
import TechniqueCard from "../components/TechniqueCard";
import { getTechniquesFromApi } from "../services/techniqueService";
import { Col, Row } from "react-bootstrap";

const TechniquesView = () => {
  const [techniques, setTechniques] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTechniques, setFilterTechniques] = useState([]);

  useEffect(() => {
    getTechniques();
  }, []);

  useEffect(() => {
    const results = techniques.filter((technique) =>
      technique.name.toString().toLowerCase().includes(searchTerm)
    );
    setFilterTechniques(results);
  }, [searchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const getTechniques = async () => {
    const response = await getTechniquesFromApi();
    setTechniques(response.data);
  };

  return (
    <div className="container" style={{ marginBottom: "50px" }}>
      <h2>Techniques</h2>
      <label style={{ marginRight: "10px" }}>Search: </label>
      <input
        type="text"
        placeholder="Search techniques"
        value={searchTerm}
        onChange={handleChange}
        style={{marginBottom: "40px"}}
      />

      <Row xs={1} md={3} className="g-4">
        {techniques &&
          techniques.map((technique) => {
            if (technique.approved === 'true' && (searchTerm == "")) {
              return (
                <div key={technique._id}>
                  <Col>
                    <TechniqueCard props={technique} />
                  </Col>
                </div>
              );
            }
          })}

        {filterTechniques &&
          filterTechniques.map((technique) => {
            if (technique.approved == "true" && searchTerm) {
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
