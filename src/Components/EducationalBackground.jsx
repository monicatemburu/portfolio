import "../Styles/EducationalBackground.css";
function EducationalBackground() {
  return (
    <div style={{marginTop: "130px"}}>
      <div class="row">
        <div class="Ed_column">
          <div class="card" style={{ backgroundColor: "darkseagreen" }}>
            <h3
              style={{
                fontSize: "3vw",
                fontFamily: "'Playball', cursive",
                color: "unset",
              }}
            >
              Hello, I've done my UG in
            </h3>
            <p
              style={{
                fontSize: "2.1vw",
                fontFamily: "'Acme', sans-serif",
                color: "unset",
              }}
            >
              Aditya Institute of Technology and Management, Tekkali
            </p>
            <p
              style={{
                fontSize: "1.5vw",
                fontFamily: "'Pacifico', cursive",
                color: "unset",
              }}
            >
              with 8.57 cgpa,
            </p>
            <p
              style={{
                fontSize: "2vw",
                fontFamily: "'Architects Daughter', cursive",
                color: "darkslategrey",
              }}
            >
              a 2020 passout
            </p>
          </div>
        </div>

        <div class="Ed_column">
          <div class="card" style={{ backgroundColor: "thistle" }}>
            <h3
              style={{
                fontSize: "3vw",
                fontFamily: "'Playball', cursive",
                color: "darkslategrey",
              }}
            >
              and, I've done my +1 & +2 in
            </h3>
            <p
              style={{
                fontSize: "2vw",
                fontFamily: "'Acme', sans-serif",
                color: "darkslategrey",
              }}
            >
              Sri Gayathri Junior College, Visakhapatnam
            </p>
            <p
              style={{
                fontSize: "1.5vw",
                fontFamily: "'Pacifico', cursive",
                color: "darkslategrey",
              }}
            >
              with 96%,
            </p>
            <p
              style={{
                fontSize: "2.1vw",
                fontFamily: "'Architects Daughter', cursive",
                color: "darkslategrey",
              }}
            >
              a 2016 passout
            </p>
          </div>
        </div>

        <div class="Ed_column">
          <div class="card" style={{ backgroundColor: "salmon" }}>
            <h3
              style={{
                fontSize: "3vw",
                fontFamily: "'Playball', cursive",
                color: "floralwhite",
              }}
            >
              and, I've done my schooling in
            </h3>
            <p
              style={{
                fontSize: "2vw",
                fontFamily: "'Acme', sans-serif",
                color: "floralwhite",
              }}
            >
              St.Joseph's Secondary School, Visakhapatnam
            </p>
            <p
              style={{
                fontSize: "1.5vw",
                fontFamily: "'Pacifico', cursive",
                color: "floralwhite",
              }}
            >
              with 86% in ICSE Board ,
            </p>
            <p
              style={{
                fontSize: "2.1vw",
                fontFamily: "'Architects Daughter', cursive",
                color: "floralwhite",
              }}
            >
              a 2014 passout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationalBackground;
