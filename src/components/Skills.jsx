import React from "react";
import "./skill.css";

import { LuNetwork } from "react-icons/lu";
import { SlScreenDesktop } from "react-icons/sl";
import { BsTools } from "react-icons/bs";
import { IconContext } from "react-icons";

function Skills() {
  return (
    <div>
      <div className="purple">
        <h1>Hi, I'm Badri. Nice to meet you.</h1>
        <p>
          Since joining Kalvium, I've delved into both front-end and back-end
          development, expanding my skills to become a full-stack developer.
          Crafting fully functional websites with sleek user interfaces has
          become my passion. I particularly enjoy the intricacies of backend
          routing, adding depth and efficiency to the overall functionality of
          the websites I create.
        </p>
      </div>
      <div className="skill">
        <div>
          <IconContext.Provider value={{ size: "2em" }}>
            <div className="icon">
              <div className="iconImg">
                <SlScreenDesktop />
              </div>
            </div>
          </IconContext.Provider>
          <h2>Front-End</h2>
          <p>
            My front-end development experience includes proficiency in HTML,
            CSS, and JavaScript, allowing me to craft visually appealing and
            user-friendly interfaces.
          </p>
          <p className="pp">Things I Enjoy:</p>
          <p>Creativity, Design, Innovation, User Experience</p>

          <p className="pp">Dev Tools:</p>
          <p>
            HTML5 <br /> CSS <br /> JavaScript(ES6+) <br />
            React JS <br /> Tailwind CSS <br />
            Netlify
          </p>
        </div>
        <div className="middle">
          <IconContext.Provider value={{ size: "2em" }}>
            <div className="icon">
              <div className="iconImg">
                <BsTools />
              </div>
            </div>
          </IconContext.Provider>
          <h2>Back-End</h2>
          <p>
            My back-end development centers on Node.js for server-side scripting
            and MongoDB for database management and scalable web applications.
          </p>

          <p className="pp">Things I Enjoy:</p>
          <p>Architecting, Optimizing, Implementing, Securing</p>
          <p className="pp">Dev Tools:</p>
          <p>
            Node JS <br /> Express JS <br /> Mongoose <br />
            MongoDB <br /> Render <br /> Bruno
          </p>
        </div>
        <div>
          <IconContext.Provider value={{ size: "2em" }}>
            <div className="icon">
              <div className="iconImg">
                <LuNetwork />
              </div>
            </div>
          </IconContext.Provider>
          <h2>Full-Stack</h2>
          <p>
            My full-stack experience includes mastery of both front-end and
            back-end technologies, enabling end-to-end development of web
            applications.
          </p>
          <p className="pp">Things I Enjoy:</p>
          <p>Creativity, Problem-Solving, Versatility, Fulfillment</p>
          <p className="pp">Dev Tools:</p>
          <p>
            Git <br /> Git-Hub <br />
            OAuth 2.0 <br /> Google Cloud <br />
            npm <br />
            OOPS
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
