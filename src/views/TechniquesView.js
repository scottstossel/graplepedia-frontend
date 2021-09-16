import { useEffect, useState } from "react";
import TechniqueCard from "../components/TechniqueCard";
import { getTechniquesFromApi } from "../services/techniqueService";

const TechniquesView = () => {
  const [techniques, setTechniques] = useState([]);

  useEffect(() => {
    getTechniques();
  }, [])

  const getTechniques = async () => {
    const response = await getTechniquesFromApi();
    setTechniques(response.data);
  }

  return (
    <div className="container">
    <h2>Techniques</h2>
    {techniques && techniques.map((technique) => (
      <div>
        <TechniqueCard props={technique} />
      </div>
    ))}
    </div>
   )

}

export default TechniquesView;