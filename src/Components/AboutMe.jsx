import { FcDownRight } from "react-icons/fc";
import { BsMedium } from "react-icons/bs";
import { FaGitlab } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import "../Styles/AboutMe.css";
import my_img from "../Resources/my_img.png";

function AboutMe() {
  return (
    <div className="container" style={{ display: "flex" }}>
      <div className="column">
        <h1
          style={{
            fontSize: "3vw",
            fontFamily: "'Playball', cursive",
            color: "whitesmoke",
            marginTop: "6vw"
          }}
        >
          Hello, I'm
        </h1>
        <h1
          style={{
            fontSize: "4vw",
            fontFamily: "'Acme', sans-serif",
            color: "whitesmoke",
          }}
        >
          Sai Monica Sowmya Sri Temburu
        </h1>
        <h2
          style={{
            fontSize: "2.5vw",
            fontFamily: "'Amaranth', sans-serif",
            color: "whitesmoke",
          }}
        >
          Frontend Web Developer
        </h2>
        <h1
          style={{
            fontSize: "1.5vw",
            fontFamily: "'Zen Kurenaido', sans-serif",
            color: "whitesmoke",
          }}
        >
          <span>
            <FcDownRight />
          </span>{" "}
          Software Developer at ValueLabs
        </h1>
        <h1
          style={{
            fontSize: "1.3vw",
            fontFamily: "'Zen Kurenaido', sans-serif",
            // fontFamily: "'Advent Pro', sans-serif",
            // width: "700px",
            color: "whitesmoke",
            overflowWrap: "break-word",
          }}
        >
          Inventive frontend developer with 1+ year of expertise in frontend
          framework,
        </h1>
        <h1
          style={{
            fontSize: "1.3vw",
            fontFamily: "'Zen Kurenaido', sans-serif",
            // fontFamily: "'Advent Pro', sans-serif",
            // width: "700px",
            color: "whitesmoke",
            overflowWrap: "break-word",
          }}
        >
          Javascript/ES6, Node JS areas with willingness to learn and master
          Back-end Development.
        </h1>
        <div className="Socio-icons">
          <span>
            <a
              href="https://gitlab.com/smsstemburu"
              target="_blank"
              id="Socio-icons"
            >
              <FaGitlab />
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/sai-monica-s-73a70b134/"
              target="_blank"
              id="Socio-icons"
            >
              <AiFillLinkedin />
            </a>
          </span>
          <span>
            <a
              href="https://smsstemburu.medium.com"
              target="_blank"
              id="Socio-icons"
            >
              <BsMedium />
            </a>
          </span>
        </div>
      </div>
      <div className="column" style={{ paddingLeft: "6vw" }}>
        <img src={my_img} className="MyImage"></img>
      </div>
    </div>
  );
}

export default AboutMe;
