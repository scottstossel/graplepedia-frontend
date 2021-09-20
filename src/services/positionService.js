import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;

export const getPositionsFromApi = async () => {
  const response = await axios.get(`${apiUrl}/positions`);
  return response;
}

export const getSinglePositionFromApi = async (id) => {
  const response = await axios.get(`${apiUrl}/positions/position/${id}`);
  return response;
}

export const postPositionToApi = async (position) => {
  const response = await axios.post(`${apiUrl}/positions/position`, position);
  return response;
}

export const imageUploadToApi = async (id, img) => {
  const formData = new FormData();
  formData.append('image', img);
  const response = await axios.post(`${apiUrl}/positions/position/imageUpload/${id}`, formData);
  return response;
}

export const updatePositionToApi = async (position) => {
  const response = await axios.put(`${apiUrl}/positions/position/${position._id}`, position);
  return response;
}

export const deletePositionFromApi = async (id) => {
  const response = await axios.delete(`${apiUrl}/positions/position/${id}`);
  return response;
}