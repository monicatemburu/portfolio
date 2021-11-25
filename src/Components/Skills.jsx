import React, { Component } from "react";
import "../Styles/Skills.css";

class Skills extends Component {
  render() {
    return (
      <div
        className="container Dots"
        style={{ display: "flex", marginTop: "55px" }}
      >
        <div>
          <span
            className="dot"
            style={{
              padding: "4vw",
              color: "brown",
              fontSize: "2vw",
              textAlign: "center",
              marginTop: "50px",
              backgroundColor: "aliceblue",
            }}
          >
            React JS
          </span>
          <span
            className="dot"
            style={{
              padding: "4vw",
              color: "cadetblue",
              fontSize: "2vw",
              textAlign: "center",
              marginTop: "20px",

              backgroundColor: "antiquewhite",
            }}
          >
            React Redux
          </span>
        </div>
        <div>
          <span
            className="dot"
            style={{
              padding: "4vw",
              color: "black",
              fontSize: "2vw",
              textAlign: "center",
              marginTop: "50px",
              backgroundColor: "burlywood",
            }}
          >
            Node JS
          </span>
          <span
            className="dot"
            style={{
              padding: "4vw",
              color: "bisque",
              fontSize: "2vw",
              textAlign: "center",
              marginTop: "20px",

              backgroundColor: "Teal",
            }}
          >
            Express JS
          </span>
        </div>
        <div>
          <span
            className="dot"
            style={{
              padding: "4vw",
              color: "purple",
              fontSize: "2vw",
              textAlign: "center",
              marginTop: "50px",
              backgroundColor: "springgreen",
            }}
          >
            CSS
          </span>
          <span
            className="dot"
            style={{
              padding: "4vw",
              color: "yellow",
              fontSize: "2vw",
              textAlign: "center",
              marginTop: "20px",

              backgroundColor: "silver",
            }}
          >
            Javascript ES6
          </span>
        </div>
        <div>
          <span
            className="dot"
            style={{
              padding: "4vw",
              color: "darkmagenta",
              fontSize: "2vw",
              textAlign: "center",
              marginTop: "50px",
              backgroundColor: "aquamarine",
            }}
          >
            HTML
          </span>
          <span
            className="dot"
            style={{
              padding: "4vw",
              color: "darkred",
              fontSize: "2vw",
              textAlign: "center",
              marginTop: "20px",
              backgroundColor: "chocolate",
            }}
          >
            Git
          </span>
        </div>
        <div>
          <span
            className="dot"
            style={{
              padding: "4vw",
              color: "blue",
              fontSize: "2vw",
              textAlign: "center",
              marginTop: "50px",
              backgroundColor: "pink",
            }}
          >
            MySQL (Basics)
          </span>
          <span
            className="dot"
            style={{
              padding: "4vw",
              color: "darkcyan",
              fontSize: "2vw",
              textAlign: "center",
              marginTop: "20px",
              backgroundColor: "palegoldenrod",
            }}
          >
            Mongo DB (Basics)
          </span>
        </div>
      </div>
    );
  }
}

export default Skills;
