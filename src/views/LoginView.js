import React from "react";
import {useHistory} from 'react-router';
import { useState } from "react";
import { loginUserToApi } from "../services/authService";
import './LoginView.css';
import {Button} from 'react-bootstrap';

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
        <Button onClick={handleSubmit} variant="outline-primary">Login</Button>{' '}
      </form>
    </div>
  )
}

export default LoginView;

 