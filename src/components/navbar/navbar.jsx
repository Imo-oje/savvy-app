import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SiBinance } from "react-icons/si";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdRose } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { IoClose, IoMenu } from "react-icons/io5";
import "./navbar.scss";
import Button from "../button/button";
import useScreenSize from "../../utils/use";

function Navbar() {
  let LogoIconStyles = { color: "#E5C232", fontSize: "1.5em" };

  const screenSize = useScreenSize();

  const [button, setButton] = useState(true);

  function toggleBtn() {
    setButton((prevButton) => !prevButton);
  }

  const selectByScreenSize =
    screenSize.width <= 1024 ? (
      <label htmlFor="nav-check">{button ? <IoMenu /> : <IoClose />}</label>
    ) : (
      <GrLanguage />
    );

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <SiBinance style={LogoIconStyles} />
          <h1>Binance</h1>
        </div>

        <input type="checkbox" name="nav-check" id="nav-check" />

        <ul className="nav-links">
          <li>
            <a href="">Buy Crypto</a>
          </li>
          <li>
            <a href="">Trade</a>
          </li>
          <li className="flex items-center hover:text-primary cursor-pointer font-medium p-2">
            <a href="">Invest</a>
          </li>
          <li className="flex items-center hover:text-primary cursor-pointer font-medium p-2">
            <a href="">Contact</a>
          </li>
          <li className="flex items-center hover:text-primary cursor-pointer font-medium p-2">
            <a href="">More</a>
            <RiArrowDropDownLine />
          </li>
          <div className="login-register-btn-labels">
            <label htmlFor="login-btn">
              <li className="login-btn">
                <Link to="login">Log In</Link>
              </li>
            </label>

            <label htmlFor="reister-btn">
              <li className="register-btn">
                <Link to="register" href="register">
                  <IoMdRose />
                  Register
                </Link>
              </li>
            </label>
          </div>
        </ul>

        <ul className="user-action">
          <li id="login-btn" className="login-btn">
            <Link to="login">Log In</Link>
          </li>
          <Button
            id="register"
            name="Register"
            icon={<IoMdRose />}
            url="register"
            className="register-btn"
          />
          <li onClick={toggleBtn} className="menu-btn">
            {selectByScreenSize}
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
