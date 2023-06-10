import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset previous errors
    setNameError('');
    setPasswordError('');
    setErrorMessage('');

    // Perform form validation
    if (name.trim() === '') {
      setNameError('Tên không được bỏ trống');
      return;
    }

    if (password.trim() === '') {
      setPasswordError('Mật khẩu không được bỏ trống');
      return;
    }

    try {
      // Make a request to the API to check the credentials
      const response = await axios.get(`https://647783419233e82dd53bc684.mockapi.io/mypham/users?name=${name}`);
      const users = response.data;

      const user = users.find((u) => u.password === password);

      if (user) {
        // Successful login
        const token = 'your_generated_token'; // Generate or fetch token from your authentication mechanism
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
        navigate('/'); // Chuyển về trang chủ sau khi đăng nhập thành công
      } else {
        setErrorMessage('Tên hoặc mật khẩu không đúng');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Đã xảy ra lỗi');
    }
  };

  if (isLoggedIn) {
    return (
      <div>
        <h1>Đăng nhập thành công!</h1>
        <Link to="/">Trang chủ</Link>
        <button onClick={handleLogout}>Đăng xuất</button>
      </div>
    );
  }

  return (
    <div className="form-login">
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <h1>
          <strong>Login</strong>
        </h1>
        <div className="form-group">
          <label htmlFor="name">Name</label> <br />
          <div className="form-input">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Nhập tên của bạn"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          {nameError && <p className="error-message">{nameError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <br />
          <div className="form-input">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Nhập mật khẩu của bạn"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        <button type="submit" className="btn btn-warning" name="btn">
          LOGIN
        </button>
        <Link className="btn btn-danger" to="/Signup/">
          Register
        </Link>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
    </div>
  );
}

export default Login;

