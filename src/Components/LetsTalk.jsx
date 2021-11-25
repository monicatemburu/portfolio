import { FaPhoneAlt } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { FaGitlab } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import "../Styles/AboutMe.css";
import my_img from "../Resources/my_img.png";

function LetsTalk() {
  return (
    <div className="container" style={{ display: "flex" }}>
      <div className="column">
        <h1
          style={{
            fontSize: "3vw",
            fontFamily: "'Playball', cursive",
            color: "whitesmoke",
            marginTop: "6vw",
          }}
        >
          Hey, get in touch with
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
            <MdEmail />
          </span>{" "}
          smsstemburu@gmail.com
        </h1>
        
      </div>
      <div className="column" style={{ paddingLeft: "6vw" }}>
        <img src={my_img} className="MyImage"></img>
      </div>
    </div>
  );
}

export default LetsTalk;
