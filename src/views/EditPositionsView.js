import { useEffect, useState } from "react";
import EditPositionCard from "../components/EditPositionCard";
import { getPositionsFromApi } from "../services/positionService";

const EditPositionsView = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    getPositions();
  }, [])

  const getPositions = async () => {
    const response = await getPositionsFromApi();
    setPositions(response.data);
  }

  

  return (
    <div className="container">
    <h2>Unapproved Positions</h2>
    {positions && positions.map((position) => {
      if (position.approved == 'false') {
      return <div>
        <EditPositionCard props={position} />
      </div>
      }
    })}
    <h2>Approved Positions</h2>
    {positions && positions.map((position) => {
      if (position.approved == 'true') {
      return <div>
        <EditPositionCard props={position} />
      </div>
      }
    })}
    </div>
)
  }
export default EditPositionsView;