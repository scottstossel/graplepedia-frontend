const { useEffect, useState } = require("react");
const { useHistory } = require("react-router");
const {
  updatePositionToApi,
  deletePositionFromApi,
  imageUploadToApi,
  getPositionsFromApi,
  getSinglePositionFromApi,
} = require("../services/positionService");

const EditPositionView = ({ match }) => {
  const [position, setPosition] = useState({
    name: '',
    description: '',
    video: '',
    img: '',
    approved: '',
  });
  const { id } = match.params;
  const history = useHistory();

  useEffect(() => {
    getSinglePosition();
  }, []);

  const handleChange = (event) => {
    setPosition({
      ...position,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updatePositionToApi(position);
    history.push("/");
    alert('Position has been updated.')
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    await deletePositionFromApi(id);
    history.push("/");
  };

  //image upload
  const handleImageUpload = async (event) => {
    const imageFile = event.target.files[0];
    await imageUploadToApi(id, imageFile);
    getSinglePosition();
  };

  const getSinglePosition = async () => {
    const response = await getSinglePositionFromApi(id);
    setPosition(response.data);
  };

  return (
    <div className="container">
      <h2>Edit: </h2>
      <form>
        <label>Name</label>
        <input
          type="text"
          value={position.name}
          onChange={handleChange}
          name="name"
          placeholder="position name"
        />
        <label>Description</label>
        <textarea
          type="text"
          value={position.description}
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
          value={position.video}
          onChange={handleChange}
        />
        <input
          type="text"
          value={position.approved}
          name="approved"
          placeholder="true or false"
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit}>Update Position</button>
        <button onClick={handleDelete}>Delete Position</button>
      </form>
    </div>
  );
};

export default EditPositionView;
