import { useEffect, useState } from "react";
import PositionCard from "../components/PositionCard";
import { getPositionsFromApi } from "../services/positionService";

const PositionsView = () => {
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
    <h2>Positions</h2>
    {positions && positions.map((position) => {
      if (position.approved === 'true') {
        return <div key={position._id}>
                <PositionCard props={position} />
              </div>
      } 
      }
    )
    }
    </div>
   
)
  }
export default PositionsView;