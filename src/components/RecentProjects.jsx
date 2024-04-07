import React from "react";
import "./pro.css";
function RecentProjects() {
  return (
    <div className="recent">
      <h1>My Recent Work</h1>
      <p>
        Here are a few projects I've worked on. Want to see more?
        <a href="https://github.com/heybadrinath" target="_blank">
          {" "}
          Click Here
        </a>
      </p>

      <div className="project">
        <div className="p1">
          <img src="./p1.png" />
          <p className="hid">Working Food Recipe Website</p>
          <div className="hid">
            <button className="links hid2">
              <a href="https://heybadrinath.github.io/CA-3/" target="_blank">
                Visit Site
              </a>
            </button>
            <button className="links hid2">
              <a
                href="https://github.com/heybadrinath/CA-3.git"
                target="_blank"
              >
                See Code
              </a>
            </button>
          </div>
        </div>
        <div className="p2">
          <img src="./p2.png" />
          <p className="hid">Quiz App with state control</p>
          <div className="hid">
            <button className="links hid2">
              <a
                href="https://github.com/heybadrinath/CA-4.git"
                target="_blank"
              >
                Visit Site
              </a>
            </button>
            <button className="links hid2">
              <a
                href="https://super-platypus-b04e44.netlify.app/"
                target="_blank"
              >
                See Code
              </a>
            </button>
          </div>
        </div>
        <div className="p3">
          <img src="./p3.png" />
          <p className="hid">Fully Funtional Calculator</p>
          <div className="hid">
            <button className="links hid2">
              <a
                href="https://golden-beijinho-89ea92.netlify.app/"
                target="_blank"
              >
                Visit Site
              </a>
            </button>

            <button className="links hid2">
              <a
                href="https://github.com/heybadrinath/code-along-react-calculator-boilerplate.git"
                target="_blank"
              >
                See Code
              </a>
            </button>
          </div>
        </div>
        <div className="p4">
          <img src="./p4.png" />
          <p className="hid">Full-Stack Application</p>
          <div className="hid">
            <button className="links hid2">
              <a
                href="https://github.com/heybadrinath/Insta_Cringe.git"
                target="_blank"
              >
                Visit Site
              </a>
            </button>

            <button className="links hid2">
              <a
                href="https://github.com/heybadrinath/Insta_Cringe.git"
                target="_blank"
              >
                See Code
              </a>
            </button>
          </div>
        </div>
        <div className="p5">
          <img src="./p5.png" />
          <p className="hid">Creative Game using Front-End</p>
          <div className="hid">
            <button className="links hid2">
              <a href="https://heybadrinath.github.io/CA-2/" target="_blank">
                Visit Site
              </a>
            </button>
            <button className="links hid2">
              <a
                href="https://github.com/heybadrinath/CA-2.git"
                target="_blank"
              >
                See Code
              </a>
            </button>
          </div>
        </div>
        <div className="p6">
          <img src="./p6.png" />
          <p className="hid">Quiz App Funtional</p>
          <div className="hid">
            <button className="links hid2">
              <a
                href="https://symphonious-swan-7ea66e.netlify.app/"
                target="_blank"
              >
                Visit Site
              </a>
            </button>
            <button className="links hid2">
              <a
                href="https://github.com/heybadrinath/project-react-quiz-app-three-boilerplate.git"
                target="_blank"
              >
                See Code
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentProjects;
