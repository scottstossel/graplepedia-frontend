import {Button} from "react-bootstrap";
import { useState, useEffect } from "react";
import { getSinglePositionFromApi, imageUploadToApi, postTechniqueToApi } from "../services/techniqueService";
import './AddView.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { getPositionsFromApi } from "../services/positionService";

const AddTechniqueView = () => {
  const [positions, setPositions] = useState([]);
  const [technique, setTechnique] = useState({
    name: "",
    img: "",
    description: "",
    video: "",
    position: ""
  });

  useEffect(() => {
    getPositions();
  }, []);

  //get positions for selector
  const getPositions = async () => {
    const response = await getPositionsFromApi();
    setPositions(response.data);
  }

  //handle change
  const handleChange = (event) => {
    setTechnique({
      ...technique,
      [event.target.name]: event.target.value,
    });
  };
  

  //handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    postTechniqueToApi(technique);
    setTechnique({
      name: "",
      img: "",
      description: "",
      video: "",
      position: ""
    });
    alert('Thank you for your submission. Technique is awaiting review.')
  };

  return (
    <div className="container mt-3">
      <h2>Add Technique</h2>
      <form>
        <label>Technique Name: </label>
        <input
          value={technique.name}
          onChange={handleChange}
          name="name"
          placeholder="name"
          type="text"
        />
        <label>Description of the technique:</label>
        <textarea
          value={technique.description}
          onChange={handleChange}
          name="description"
          placeholder="description"
        />
        <label>Link to video of technique:</label>
        <input
          value={technique.video}
          onChange={handleChange}
          name="video"
          placeholder="video link"
          type="text"
        />
        <label>Position:</label>
        <select name="position" onChange={handleChange}>
          <option selected disabled>Select a position</option>
          {positions.map(position => {
            if (position.approved === 'true') {
            return <option value={position._id} key={position._id}>
              {position.name}
            </option>
            }
          })}
        </select>
        <br />
        <Button onClick={handleSubmit} variant="outline-primary">Create Position</Button>{' '}
        {/* <button onClick={handleSubmit}>Create Technique</button> */}
      </form>
    </div>
  );
};

export default AddTechniqueView;
