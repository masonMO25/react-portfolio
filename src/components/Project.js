import React from "react";

function Project() {
  return (
    <section>
      <h1> Apps I've Built</h1>
      <div>
        <ol>
          <a href="https://masonmo25.github.io/Night-Out/">
            <h3>Night Out</h3>
          </a>
        </ol>
        <li>
          We created Night Out so you can look up a restaurant at your own
          convenience. By entering your location and the name of a restaurant
          you will be presented with all information you desire.
        </li>
        <li>
          Link to github repo:{" "}
          <a href="https://github.com/masonMO25/Night-Out">
            {" "}
            https://github.com/masonMO25/Night-Out{" "}
          </a>{" "}
        </li>

        <ol>
          <a href="https://masons-book-club.herokuapp.com/">
            <h3>Book Club</h3>
          </a>
        </ol>
        <li>
          {" "}
          Book Club is a website that gives bookheads a place to discuss their
          favorite novels.{" "}
        </li>
        <li>
          {" "}
          Link to github repo:{" "}
          <a href="https://github.com/masonMO25/comicclub">
            {" "}
            https://github.com/masonMO25/comicclub
          </a>
        </li>
        
        <ol>
          <h3>SQL Employee Tracker</h3>
        </ol>
        <li>
          Employee Tracker uses SQL to store employee information including
          role, salary, and department.
        </li>
        <li>
          Link to github repo:{" "}
          <a href="https://github.com/masonMO25/SQL-Employee-Tracker">
            {" "}
            https://github.com/masonMO25/SQL-Employee-Tracker{" "}
          </a>
        </li>
        <ol>
          <a href="https://secure-shelf-52596.herokuapp.com/">
            <h3>PWA Text Editor</h3>
          </a>
        </ol>
        <li>
          This is a simple text editor app that can function both online and
          offline.
        </li>
        <li>
          Link to github repo:{" "}
          <a href="https://github.com/masonMO25/PWA-texteditor">
            {" "}
            https://github.com/masonMO25/PWA-texteditor
          </a>
        </li>
      </div>
    </section>
  );
}

export default Project;
