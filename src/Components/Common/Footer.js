import React from 'react';
import '../../Styles/global.css';
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <ul>
              <li>
                <div>
                  <img
                    className="logo"
                    src="../../asset/picture/3e1b693d-9dc1-43e7-b517-763a153989af-removebg-preview (2).png"
                    alt=""
                  />
                  Moonlight
                </div>
              </li>
              <li>
                <p className="text">
                  We guarantee quality and satisfaction when coming to our movie ticket booking site.
                </p>
              </li>
            </ul>

            <div className="contact_icon">
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-square-twitter"></i>
              <i className="fa-brands fa-square-whatsapp"></i>
              <i className="fa-brands fa-square-instagram"></i>
            </div>
          </div>
          <div className="col-sm-3">
            <br />
            <h4 className="text-footer">Quick Link</h4>
            <ul>
              <li>
                <a href="homepage.php">About Us</a>
              </li>
              <li>
                <a href="homepage.php">Movies</a>
              </li>
              <li>
                <a href="homepage.php">Partner</a>
              </li>
              <li>
                <a href="homepage.php">Help</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <br />
            <h5 className="text-footer">Important</h5>
            <ul>
              <li>
                <a href="homepage.php">Support</a>
              </li>
              <li>
                <a href="homepage.php">FAQ</a>
              </li>
              <li>
                <a href="homepage.php">Check</a>
              </li>
              <li>
                <a href="homepage.php">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <br />
            <h5 className="text-footer">Contact</h5>
            <ul>
              <li>
                <p className="text">Subscribe our newsletter to get the latest updates and news.</p>
              </li>
              <li>
                <input type="text" name="Send" className="Send" placeholder="   Enter Email" />
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
