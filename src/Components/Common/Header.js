import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const { search, state } = useLocation();
  const [user, setUser] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      axios
        .get('https://647783419233e82dd53bc684.mockapi.io/mypham/users', {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        })
        .then((response) => {
          if (response.status === 200 && response.data) {
            setToken(storedToken);
            setUser(response.data.name);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else if (state && state.token) {
      setToken(state.token);
    } else {
      setToken('');
    }
  }, [search, state]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
    setUser(null);
    navigate('/Login'); // Chuyển về trang đăng nhập sau khi đăng xuất
  };

  return (
    <nav className="header">
      <div>
        <img
          className="logo"
          src="http://localhost/cinema-fe/asset/picture/3e1b693d-9dc1-43e7-b517-763a153989af-removebg-preview%20(2).png"
          alt=""
        />
        <b className="logo_text">Moonlight</b>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link> {/* Sử dụng Link thay cho anchor tag */}
        </li>
        <li>
          <a href="#">Movies</a>
          <ul id="type-movies">
            <li>
              <a href="playing.php">Playing</a>
            </li>
            <li>
              <a href="upcoming.php">Upcoming</a>
            </li>
          </ul>
        </li>
        <li>
          <input
            id="search"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <a href="#">
            <i className="fas fa-magnifying-glass"></i>
          </a>
        </li>
        {token ? (
          <li>
            <div id="log_out" className="user-name">
              {user}
              <i className="fas fa-user"></i>
              <div className="log-out">
                <a href="#" onClick={handleLogout}>
                  Log out
                </a>
              </div>
            </div>
          </li>
        ) : (
          <li>
            <Link to="/Login/">Login</Link>
          </li>
        )}
      </ul>
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
    </nav>
  );
}

export default Header;
