import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">
              <b>My Portfolio</b>
            </a>
          </div>

          <ul class="nav navbar-nav">
            <li>
              <a href="#">
                <span class="glyphicon glyphicon-user"></span>{" "}
                <Link to="/">Me</Link>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="glyphicon glyphicon-briefcase"></span>{" "}
                <Link to="/ProfessionalExperience">
                  Professional Experience
                </Link>
              </a>
            </li>

            <li>
              <a href="#">
                <span class="glyphicon glyphicon-list-alt"></span>{" "}
                <Link to="/Projects">Projects</Link>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="glyphicon glyphicon-wrench"></span>{" "}
                <Link to="/Skills">Skills</Link>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="glyphicon glyphicon-folder-open"></span>{" "}
                <Link to="/Workouts">Workouts</Link>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="glyphicon glyphicon-education"></span>{" "}
                <Link to="/EducationalBackground">Educational background</Link>
              </a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="#">
                <span class="glyphicon glyphicon-earphone"></span>{" "}
                <Link to="/Contact">Let's talk</Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
