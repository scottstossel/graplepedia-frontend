import React from "react";
import {useHistory} from 'react-router';
import { useState } from "react";
import { loginUserToApi } from "../services/authService";

const LoginView = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  
  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  //login
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userResponse = await loginUserToApi(user);
    setUser({
      email: '',
      password: ''
    })
    window.location.reload();
    history.push('/');
  }

  return (
    <div className="container">
      <form>
        <h2>Login Here</h2>
        <input 
        placeholder="email"
        value={user.email}
        onChange={handleChange}
        name="email"
        type="email" 
        />
        <input 
        placeholder="password"
        value={user.password}
        onChange={handleChange}
        name="password"
        type="password" 
        />
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  )
}

export default LoginView;

 