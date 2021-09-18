import {Button} from "react-bootstrap";
import { useState, useEffect } from "react";
import { postPositionToApi } from "../services/positionService";
import './AddView.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddPositionView = () => {
  const [position, setPosition] = useState({
    name: "",
    img: "",
    description: "",
    video: "",
  });

  useEffect(() => {}, []);

  //handle change
  const handleChange = (event) => {
    setPosition({
      ...position,
      [event.target.name]: event.target.value,
    });
  };

  //handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    postPositionToApi(position);
    setPosition({
      name: "",
      description: "",
      video: "",
    });
    alert('Thank you for your submission. Position is awaiting review.')
  };

  return (
    <div className="container mt-3">
      <h2>Add Position</h2>
      <form>
        <label>Position Name: </label>
        <input
          value={position.name}
          onChange={handleChange}
          name="name"
          placeholder="name"
          type="text"
        />
        <label>Description of the position:</label>
        <textarea
          value={position.description}
          onChange={handleChange}
          name="description"
          placeholder="description"
        />
        <label>Link to video of position:</label>
        <input
          value={position.video}
          onChange={handleChange}
          name="video"
          placeholder="video link"
          type="text"
        />
        <br />
        <Button onClick={handleSubmit} variant="outline-primary">Create Position</Button>{' '}
        {/* <button onClick={handleSubmit} className="btn btn-outline">Create Position</button> */}
      </form>
    </div>
  );
};

export default AddPositionView;
