import { useEffect, useState } from "react";
import { getTechniquesFromApi } from "../services/techniqueService";
import EditTechniqueCard from "../components/EditTechniqueCard";

const EditTechniquesView = () => {
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
    <h2>Unapproved Techniques</h2>
    {techniques && techniques.map((technique) => {
      if (technique.approved == 'false') {
      return <div>
        <EditTechniqueCard props={technique} />
      </div>
      }
    })}
    <h2>Approved Techniques</h2>
    {techniques && techniques.map((technique) => {
      if (technique.approved == 'true') {
      return <div>
        <EditTechniqueCard props={technique} />
      </div>
      }
    })}
    </div>
   )

}

export default EditTechniquesView;