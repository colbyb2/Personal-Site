import React from "react";
import "./portfolio.css";
import uniroomLogo from "../../assets/UniRoomLogo.png";
//import stockLogo from "../../assets/StockLogo.png";
import globeIco from "../../assets/Globe.ico";
import bookIco from "../../assets/book.ico";
import colorsIco from "../../assets/colors.ico";
import calendarIco from "../../assets/calendar.ico";
import { FaGithubSquare } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="grid">
        <Project
          title="Uniroom"
          src={uniroomLogo}
          alt="Logo"
          description="Uniroom App"
          link="https://apps.apple.com/us/app/uniroom-roommate-finder/id1528826613"
          linkText="Checkout App"
          github="https://github.com/colbyb2/Uniroom"
        />
        <Project
          title="World-le"
          src={globeIco}
          alt="Logo"
          description="Country guessing game to help you learn and explore the world!"
          link="https://colbyb2.github.io/worldle"
          linkText="Visit Site"
          github="https://github.com/colbyb2/worldle"
        />
        <Project
          title="Mixr"
          src={colorsIco}
          alt="Logo"
          description="Test your eyes by mixing colors to match a different color."
          link="https://colbyb2.github.io/mixr/"
          linkText="Visit Site"
          github="https://github.com/colbyb2/mixr"
        />
        <Project
          title="Nutrico"
          src={bookIco}
          alt="Logo"
          description="Food tracking journal to help you figure out what upsets your stomach."
          link="https://nutrico-app.netlify.app"
          linkText="Visit Site"
          github="https://github.com/colbyb2/nutrico"
          demo="https://www.youtube.com/watch?v=I_r-QMSNeB8"
        />
        <Project
          title="React Calendar"
          src={calendarIco}
          alt="Logo"
          description="Customizable web calendar for React."
          link=""
          linkText="Demo"
          github="https://github.com/colbyb2/react-calendar"
        />
      </div>
    </div>
  );
};

const Project = ({
  title,
  src,
  alt = "Photo",
  description,
  link,
  linkText,
  github,
  demo = null,
}) => {
  return (
    <div className="project-card">
      <h2 className="card-title">{title}</h2>
      <img src={src} alt={alt} className="card-image" />
      <div className="card-description">{description}</div>
      <div className="link-container">
        <a href={link} className="card-link" target="_blank" rel="noreferrer">
          {linkText}
        </a>
        {demo ? (
          <a
            href={demo}
            className="card-link demo-link"
            target="_blank"
            rel="noreferrer"
          >
            See Demo
          </a>
        ) : null}
        <a
          href={github}
          className="card-github"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare className="card-github-icon" />
          <div className="card-github-text">Github</div>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
