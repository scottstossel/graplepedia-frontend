import { useEffect, useState } from "react";
import PositionCard from "../components/PositionCard";
import { getPositionsFromApi } from "../services/positionService";
import { Row, Col } from "react-bootstrap";

const PositionsView = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    getPositions();
  }, []);

  const getPositions = async () => {
    const response = await getPositionsFromApi();
    setPositions(response.data);
  };

  return (
    <div className="container" style={{marginBottom: '50px'}}>
      <h2>Positions</h2>
      <Row xs={1} md={3} className="g-4">
      {positions &&
        positions.map((position) => {
          if (position.approved === "true") {
            return (
              <div key={position._id}>
                  <Col>
                    <PositionCard props={position} />
                  </Col>
              </div>
            );
          }
        })}
        </Row>
    </div>
  );
};
export default PositionsView;
