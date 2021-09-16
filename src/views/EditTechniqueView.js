const {
  deleteTechniqueFromApi,
  getSingleTechniqueFromApi,
  updateTechniqueToApi,
  imageUploadToApi
} = require("../services/techniqueService");

const { useEffect, useState } = require("react");
const { useHistory } = require("react-router");
const {
  getPositionsFromApi,
} = require("../services/positionService");

const EditTechniqueView = ({ match }) => {
  const [technique, setTechnique] = useState({
    name: '',
    description: '',
    img: '',
    approved: '',
    video: ''
  });
  const { id } = match.params;
  const history = useHistory();
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    getSingleTechnique();
    getPositions();
  }, []);

  const handleChange = (event) => {
    setTechnique({
      ...technique,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateTechniqueToApi(technique);
    history.push("/");
    alert('Technique has been updated.')
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    await deleteTechniqueFromApi(id);
    history.push("/");
  };

  //image upload
  const handleImageUpload = async (event) => {
    const imageFile = event.target.files[0];
    await imageUploadToApi(id, imageFile);
    getSingleTechnique();
  };

  const getSingleTechnique = async () => {
    const response = await getSingleTechniqueFromApi(id);
    setTechnique(response.data);
  };

  const getPositions = async () => {
    const { data } = await getPositionsFromApi();
    setPositions(data);
  };

  return (
    <div className="container">
      <h2>Edit: </h2>
      <form>
        <label>Name</label>
        <input
          type="text"
          value={technique.name}
          onChange={handleChange}
          name="name"
          placeholder="technique name"
        />
        <label>Description</label>
        <textarea
          type="text"
          value={technique.description}
          onChange={handleChange}
          name="description"
          rows={5}
          placeholder="description..."
        />
        <label>Image</label>
        <input
          onChange={handleImageUpload}
          type="file"
          name="img"
          accept="image/*"
          placeholder="image"
        />
        <label>Video Link</label>
        <input
          type="text"
          name="video"
          placeholder="video"
          value={technique.video}
          onChange={handleChange}
        />
        <input
          type="text"
          value={technique.approved}
          name="approved"
          placeholder="true or false"
          onChange={handleChange}
        />
        <label>Position:</label>
        <select name="position" onChange={handleChange}>
          <option>Current: {technique.position?.name}</option>
          {positions.map((position) => (
            <option key={position._id} value={position._id}>
              {position.name}
            </option>
          ))}
        </select>
        <br />
        <button onClick={handleSubmit}>Update Technique</button>
        <button onClick={handleDelete}>Delete Technique</button>
      </form>
    </div>
  );
};

export default EditTechniqueView;
