import React from "react";
import nightout from "../assets/nightout.jpg";
import bookclub from "../assets/bookclub.jpg";
import sqltracker from "../assets/employeetracker.png";
import rally from "../assets/Rally.jpg";

function ProjectItem({ title, url, image, children, repo }) {
  return (
    <div className="project-item">
      <h3>
        <a href={url}>{title}</a>
      </h3>
      <img src={image} alt={title} />
      <div className="project-description">{children}</div>
      <p>
        Link to github repo: <a href={repo}>{repo}</a>
      </p>
    </div>
  );
}

function Project() {
  return (
    <section>
      <h1>Apps I've Built</h1>
      <div>
        <ProjectItem
          title="Night Out"
          url="https://masonmo25.github.io/Night-Out/"
          image={nightout}
          repo="https://github.com/masonMO25/Night-Out"
        >
          We created Night Out so you can look up a restaurant at your own
          convenience. By entering your location and the name of a restaurant
          you will be presented with all information you desire. Technologies used include
          Leaflet, OpenStreetMap, Yelp Fusion API, Crypto-JS, and Bulma.
        </ProjectItem>
        <ProjectItem
          title="Book Club"
          url="https://masons-book-club.herokuapp.com/"
          image={bookclub}
          repo="https://github.com/masonMO25/comicclub"
        >
          Book Club is a website that gives bookheads a place to discuss their
          favorite novels. Technologies used include Handlebars, bcrypt, sequelize, dotenv, Express, and mysql2.
        </ProjectItem>
        <ProjectItem
          title="SQL Employee Tracker"
          image={sqltracker}
          repo="https://github.com/masonMO25/SQL-Employee-Tracker"
        >
          Employee Tracker uses SQL to store employee information including
          role, salary, and department.
        </ProjectItem>
        <ProjectItem
          title="Rally"
          url="https://secure-shelf-52596.herokuapp.com/"
          image={rally}
          repo="https://github.com/luksvrd/Rally"
        >
          Rally is a habit tracking app that allows users to compare their habit streaks with others in specific habit tracking groups. 
          This app is built using Reactjs, mongoose, express, dotenv, bcrypt, @apollo/server, graphql, and jsonwebtoken.
        </ProjectItem>
      </div>
    </section>
  );
}

export default Project;
