import "../Styles/Workouts.css";

function Workouts() {
  return (
    <div className="container">
      <div>
        <button class="collapsible" style={{ backgroundColor: "#C85C5C" }}>
          Covid Dashboard
        </button>
        <div class="content">
          <ul>
            <li>
              Covid Dashboard is a full stack POC, frontend coded in React JS
              while backend coded in Node JS, used Express JS framework for rest
              API services in backend and recharts charting library for
              showcasing cases in the form of charts in frontend.
            </li>
            <li>
              Covid Dashboard aims to provide latest recorded cases in every
              country and state
            </li>
            <li>
              Covid Dashboard consists of four containers,
              <ul>
                <li>
                  One is headlines container which shows the country which has
                  highest record of cases till date and the state in India which
                  has highest record of cases till date
                </li>
                <li>
                  Second is All Counties/All States container which gives
                  graphical representation of All Countries/All States data like
                  newly confirmed and deaths based on user selection.
                </li>
                <li>
                  Third is Specific Country Container which gives graphical
                  representation of specific country data like newly confirmed,
                  recovered, deaths, and recovered cases based on user
                  selection.
                </li>
                <li>
                  Fourth is Specific State Container which gives graphical
                  representation of specific state data like newly confirmed,
                  recovered, deaths, and recovered cases based on user
                  selection.
                </li>
              </ul>
              <li>
                Covid Dashboard also has another feature like dark/light toggle
                mode which switches between light and dark mode based on user
                selection so as to make UI much more interactive.
              </li>
              <li>
                Are you interested in viewing Covid Dashboard ? Then do checkout
                here
              </li>
            </li>
          </ul>
        </div>
        <button class="collapsible" style={{ backgroundColor: "#F9975D" }}>
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
        </div>
      </div>
    </div>
  );
}

export default Workouts;
