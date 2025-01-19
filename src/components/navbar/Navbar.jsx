import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import useAuth from "../../userAuthentication/hooks/useAuth"; // Import the custom hook
import "./Navbar.css";
import logo from "../../assets/elMechMain.png";

const Navbar = ({ onAboutUsClick, onServicesClick, onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <div className="Header">
        <div className="logoSide">
          <img src={logo} alt="Logo" />
        </div>


        <div className="navbarMid">
          <ul className={`navbarMenu ${isOpen ? "open" : ""}`}>
            <li className="navbarNames">
              <Link className="LinkTAG LinkTAGHome active" to={"/"}>
                Home
              </Link>
            </li>
            <li className="navbarNames">
              <Link className="LinkTAG" to={"/aboutUs"} onClick={onAboutUsClick}>About Us</Link>
            </li>
            <li className="navbarNames">
              <Link className="LinkTAG" to={"/services"} onClick={onServicesClick}>Services</Link>
            </li>
            {/* <li className="navbarNames">
              <Link className="LinkTAG" to={"/elmech-user-comments"} >comments</Link>
            </li>
            <li className="navbarNames">
              <Link className="LinkTAG" to={"/elmech-user-Queries"} >Queries</Link>
            </li> */}
            <li className="navbarNames ">
              <Link className="LinkTAG" to={"/getInTouch"} onClick={onContactClick}>Contact Us</Link>
            </li>
            {user?.userRole === "admin" && (<>

              <li className="navbarNames">
                <Link className="LinkTAG" to="/elmech-user-comments">Comments</Link>
              </li>
              <li className="navbarNames">
                <Link className="LinkTAG" to="/elmech-user-Queries">Queries</Link>
              </li>

            </>)}
            {/* {user?.userRole === "user" && (
  <>
    <li>
      <Link className="LinkTAG" to="/comments">Comments</Link>
    </li>
    <li>
      <Link className="LinkTAG" to="/queries">Queries</Link>
    </li>
  </>
)} */}
            {/* {user?.userRole === "admin" && (
              <li className="navbarNames">
                <Link className="LinkTAG" to="/profile">Profile</Link>
              </li>
            )} */}
            {user ? (
              <li className="navbarNames  button-33-navbar ">
                <Link className="LinkTAG" onClick={handleLogout}>Logout</Link>
              </li>
            ) : (
              <>
                <li className="navbarNames  button-33-navbar  ">
                  <Link className="LinkTAG" to="/create-account">Sign Up</Link>
                </li>
                <li className="navbarNames  button-33-navbar ">
                  <Link className="LinkTAG" to="/login">Log In</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="toggle">
          <button onClick={toggleButton}>
            {isOpen ? <ImCross /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* For mobile */}
      <div className={`headerMobile ${isOpen ? "open" : ""}`}>
  <div className="navbarMidMobile">
    <ul>
      <li className="navbarNames">
        <Link
          className="LinkTAG LinkTAGHome active"
          to={"/"}
          onClick={() =>setIsOpen(false)} // Close navbar on mobile
        >
          Home
        </Link>
      </li>
      <li className="navbarNames">
        <Link
          className="LinkTAG"
          to={"/aboutUs"}
          onClick={() => setIsOpen(false)} // Close navbar on mobile
        >
          About Us
        </Link>
      </li>
      <li className="navbarNames">
        <Link
          className="LinkTAG"
          to={"/services"}
          onClick={() => setIsOpen(false)} // Close navbar on mobile
        >
          Services
        </Link>
      </li>
      <li className="navbarNames">
        <Link
          className="LinkTAG"
          to={"/getInTouch"}
          onClick={() => setIsOpen(false)} // Close navbar on mobile
        >
          Contact Us
        </Link>
      </li>
      {user?.userRole === "admin" && (
        <>
          <li className="navbarNames">
            <Link
              className="LinkTAG"
              to="/elmech-user-comments"
              onClick={() => setIsOpen(false)} // Close navbar on mobile
            >
              Comments
            </Link>
          </li>
          <li className="navbarNames">
            <Link
              className="LinkTAG"
              to="/elmech-user-Queries"
              onClick={() => setIsOpen(false)} // Close navbar on mobile
            >
              Queries
            </Link>
          </li>
        </>
      )}
      {user ? (
        <li className="navbarNames button-33-navbar">
          <Link
            className="LinkTAG"
            onClick={() => {
              handleLogout();
              setIsOpen(false); 
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        <>
          <li className="navbarNames button-33-navbar">
            <Link
              className="LinkTAG"
              to="/create-account"
              onClick={() => setIsOpen(false)} // Close navbar on mobile
            >
              Sign Up
            </Link>
          </li>
          <li className="navbarNames button-33-navbar">
            <Link
              className="LinkTAG"
              to="/login"
              onClick={() => setIsOpen(false)} // Close navbar on mobile
            >
              Log In
            </Link>
          </li>
        </>
      )}
    </ul>
  </div>
</div>

    </>
  );
};

export default Navbar;
