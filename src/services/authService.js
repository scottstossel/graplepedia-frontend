import axios from "axios";
const apiUrl = process.REACT_APP_API_URL

export const loginUserToApi = async (user) => {
  const response = await axios.post(`http://localhost:5000/api/auth/login`, user);
  try {
    console.log(response.data);
    if (response.data.user) {
      localStorage.setItem('jwtgrapplepedia', JSON.stringify(response.data));
      alert(`You are now logged in.`)
      }
    } catch (error) {
      console.log(error);
    return response;
  }
}
export const isAuthenticated = () => {
  if (typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('jwtgrapplepedia')) {
    return JSON.parse(localStorage.getItem('jwtgrapplepedia'));
  }
  return false;
}

export const logOut = async () => {
  await localStorage.removeItem('jwtgrapplepedia');
  alert('Logged out successfully.')
}