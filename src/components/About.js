import React from "react";
import developerPhoto from "../assets/me2.jpg";

function About() {
  return (
    <section className="d-flex justify-content-center" id="about">
      <h1>Hello, I am Mason Neale.</h1>
      <div className="my-2">
        <img src={developerPhoto} alt="developer" />
        <h3 className="container">
          <br></br>
          Hi, my name is Mason Neale. I'm a fullstack web developer based in St.
          Louis, MO. I'm passionate about creating functional web apps and love
          to create innovative solutions to complex problems. My skills include:<br></br> <br></br>
          <li>
            {" "}
            <i> Front-End</i>: HTML5, CSS, JavaScript (JSON), jQuery, Bootstrap,
            AJAX, React (Hooks), Progressive Web Applications (PWA), Responsive
            Design, RESTful APIs, Webpack
          </li>
          <li>
            {" "}
            <i>Back-End</i>: MERN Stack (MongoDB/Mongoose ODM, Express, ReactJS,
            Node.js), SQL/Sequelize ORM, GraphQL, User Authentication,
            Handlebars, Model-View-Controller (MVC), Test-Development Driven
            (TDD), Version Control (Git)
          </li>{" "}
          <br></br>
        </h3>
      </div>
    </section>
  );
}

export default About;
