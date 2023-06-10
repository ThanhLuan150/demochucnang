import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailExistsError, setEmailExistsError] = useState('');
  const [nameExistsError, setNameExistsError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Reset previous error messages
    setEmailError('');
    setPasswordError('');
    setNameError('');
    setEmailExistsError('');
    setNameExistsError('');
  
    // Initialize the errors array
    const errors = [];
  
    // Perform form validation
    if (!validateEmail(email)) {
      errors.push('Vui lòng nhập địa chỉ email hợp lệ');
    }
  
    if (password.length < 8) {
      errors.push('Mật khẩu cần dài ít nhất 8 ký tự');
    }
  
    if (!validateName(name)) {
      errors.push('Tên phải chứa chữ cái, chữ số và ký tự đặc biệt');
    }
  
    if (errors.length > 0) {
      // Set the errors to respective error state variables
      if (errors.includes('Vui lòng nhập địa chỉ email hợp lệ')) {
        setEmailError('Vui lòng nhập địa chỉ email hợp lệ');
      }
  
      if (errors.includes('Mật khẩu cần dài ít nhất 8 ký tự')) {
        setPasswordError('Mật khẩu cần dài ít nhất 8 ký tự');
      }
  
      if (errors.includes('Tên phải chứa chữ cái, chữ số và ký tự đặc biệt')) {
        setNameError('Tên phải chứa chữ cái, chữ số và ký tự đặc biệt');
      }
    } else {
      try {
        // Check if the account already exists on the API
        const response = await axios.get(`https://647783419233e82dd53bc684.mockapi.io/mypham/users?email=${email}`);
        const existingUser = response.data;
  
        if (existingUser.length > 0) {
          setEmailExistsError('Email này đã tồn tại');
        } else {
          // Create a new user on the API
          const newUser = {
            email: email,
            password: password,
            name: name,
          };
  
          await axios.post('https://647783419233e82dd53bc684.mockapi.io/mypham/users', newUser);
  
          // Registration successful, display success message
          alert('Bạn đã đăng ký thành công');
  
          // Clear input fields
          setEmail('');
          setPassword('');
          setName('');
  
          // Navigate to the login page
          navigate('/login');
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  
            const validateEmail = (email) => {
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              return emailRegex.test(email);
            };
          
            const validateName = (name) => {
              const nameRegex = /^[a-zA-Z0-9\s!@#$%^&*(),.?":{}|<>]+$/;
              const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(name);
              const hasDigits = /\d/.test(name);
              return hasSpecialChars && hasDigits && nameRegex.test(name);
            };
          
            return (
              <div className="form-register">
                <br />
                <br />
                <br />
                <form onSubmit={handleSubmit}>
                  <h1>
                    <strong>Register</strong>
                  </h1>
                  <div className="form-group">
                    <label htmlFor="email">Email</label> <br />
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                      />
                      {emailError && <p className="error-message">{emailError}</p>}
                      {emailExistsError && <p className="error-message">{emailExistsError}</p>}
                    </div>
                  </div>
                  <div className="form-group">
                      <label htmlFor="password">Password</label> <br />
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                      />
                      {passwordError && <p className="error-message">{passwordError}</p>}
                    </div>

                  <div className="form-group">
                    <label htmlFor="name">Name</label> <br />
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={name}
                      onChange={handleNameChange}
                      required
                    />
                    {nameError && <p className="error-message">{nameError}</p>}
                    {nameExistsError && <p className="error-message">{nameExistsError}</p>}
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-danger">
                      Register
                    </button>
                    <Link className='btn btn-warning' to='/Login'>
                      Login
                    </Link>
                  </div>
                </form>
              </div>
            );
          }
          
export default Register;
          
