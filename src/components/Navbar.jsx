import React from "react";
import { HiMiniHome } from "react-icons/hi2";
import { IconContext } from "react-icons";
import { Link, animateScroll as scroll } from "react-scroll";
import "./nav.css";

function Navbar() {
  return (
    <IconContext.Provider value={{ size: "2.5em" }}>
      <div className="nav">
        <HiMiniHome />
        <div>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <button className="button">Projects</button>
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <button className="button">Skills</button>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <button className="button">Contact</button>
          </Link>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Navbar;
