import React from "react";
import "./portfolio.css";
import uniroomLogo from "../../assets/UniRoomLogo.png";
import stockLogo from "../../assets/StockLogo.png";
import globeIco from "../../assets/Globe.ico";
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
          link="https://apps.apple.com/us/app/uniroom-roommate-finder/id1528826613
https://apps.apple.com/us/app/uniroom-roommate-finder/id1528826613"
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
          title="Coming soon..."
          src={stockLogo}
          alt="Logo"
          description="Project is currently in development."
          link=""
          linkText="..."
          github=""
        />
        <Project
          title="Coming soon..."
          src={stockLogo}
          alt="Logo"
          description="Project is currently in development."
          link=""
          linkText="..."
          github=""
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
}) => {
  return (
    <div className="project-card">
      <h2 className="card-title">{title}</h2>
      <img src={src} alt={alt} className="card-image" />
      <div className="card-description">{description}</div>
      <div className="link-container">
        <a href={link} className="card-link" target="_blank">
          {linkText}
        </a>
        <a href={github} className="card-github" target="_blank">
          <FaGithubSquare className="card-github-icon" />
          <div className="card-github-text">Github</div>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
