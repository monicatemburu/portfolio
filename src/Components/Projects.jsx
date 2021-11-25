import "../Styles/Workouts.css";

function Projects() {
  return (
    <div className="container">
      <div>
        <button class="collapsible" style={{ backgroundColor: "#B97A95" }}>
          Project 1<p>October, 2021 - till date</p>
        </button>
        <div class="content">
          <ul>
            Responsibilities
            <ul>
              <li>
                Introductory tour to Node JS with brief introduction on each and
                every concept.
              </li>
              <li>
                Introductory tour to Express JS with brief introduction on
                creating rest API services and consumption of API's in code
              </li>
              <li>
                Creating small POC's for trainings such as weather app,
                nodemailer, xml to json and vice-versa transformations, chat
                applications
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <div>
        <button class="collapsible" style={{ backgroundColor: "#93D9A3" }}>
          Project 2<p>Jan, 2021 - October, 2021</p>
        </button>
        <div class="content">
          <ul>
            Responsibilities
            <ul>
              <li>
                Worked for organizations custom built BI tool which is used to
                generate reports with user chosen UI and data.
              </li>
              <li>Involved in requirement analysis and Design & development</li>
              <li>Understanding the requirement and Designing the data</li>
              <li>
                Day-to-Day enhancement and support, Handling development
                activities
              </li>
              <li>
                Involved in writing the business logic for various components of
                dashboard
              </li>
              <li>
                Day to day interaction with internal client on issue/updates
              </li>
              <li>
                Updating the changes requested by business user in the dashboard
              </li>
            </ul>
          </ul>
        </div>
        {/* <button class="collapsible" style={{ backgroundColor: "#F9975D" }}>
          Node js Blog
        </button>
        <div class="content">
          I've a habit of writing a blog on learning new skills, Similarly I've
          wrote this Node JS blog on Medium platform, which covers basic
          concepts like
          <ul>
            <li>What’s Node.js</li>
            <li>Why is Node.js</li>
            <li>A brief history of Node.js</li>
            <li>Prerequisites for learning Node.js</li>
            <li>Why Node.js if Browser ?</li>
          </ul>
          Interested in blog ? Then do checkout here
        </div>
        <button class="collapsible" style={{ backgroundColor: "#FBD148" }}>
          Kafka Blog
        </button>
        <div class="content">
          As I've already said about my interest in blog writing, this is my new
          blog on Kafka which deals with basic concepts like
          <ul>
            <li>What’s Kafka ?</li>
            <li>History of Kafka</li>
            <li>Why do we need Kafka ?</li>
            <li>How Kafka differs Traditional Messaging Queues ?</li>
            <li>Use Cases of Kafka</li>
            <li>Top Competitors of Kafka</li>
          </ul>
          Interested in blog ? Then do checkout here
        </div> */}
      </div>
    </div>
  );
}

export default Projects;
