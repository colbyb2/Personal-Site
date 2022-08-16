import React from "react";
import Carousel, { CarouselItem } from "../../../components/Carousel";
import { Link } from "react-router-dom";
import cssPhoto from "../../../assets/css.png";
import htmlPhoto from "../../../assets/html.png";
import csharpPhoto from "../../../assets/csharp.png";
import swiftPhoto from "../../../assets/swift.png";
import javascriptPhoto from "../../../assets/javascript.png";
import javaPhoto from "../../../assets/java.jpeg";
import expressPhoto from "../../../assets/express.png";
import "./AboutBlock.css";

//Tech Photos
const xcodePhoto =
  "https://developer.apple.com/design/human-interface-guidelines/macos/images/app-icon-realistic-materials_2x.png";
const vscodePhoto =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png";
const reactPhoto =
  "https://icon-library.com/images/react-icon/react-icon-29.jpg";
const bootstrapPhoto =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png";
const firebasePhoto =
  "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png";
const nodejsPhoto = "https://logodix.com/logo/1764875.png";

function AboutBlock() {
  return (
    <div>
      <WhoBlock />
      <LanguageBlock />
      <TechnologyBlock />
      <PortfolioBlock />
      <ContactBlock />
    </div>
  );
}

const WhoBlock = () => {
  return (
    <div className="block who-container">
      <div className="who-title">Who am I?</div>
      <div className="who-body">
        My name is Colby Brown. I am currently a student at the University of
        Wisconsin-Madison studying computer science. I enjoy both front and back
        end web development along with building mobile apps.
      </div>
    </div>
  );
};

const LanguageBlock = () => {
  return (
    <div className="block language-container">
      <div className="language-title">Languages</div>
      <div className="language-list">
        <LanguageCard name={"Javascript"} photo={javascriptPhoto} />
        <LanguageCard name={"HTML"} photo={htmlPhoto} />
        <LanguageCard name={"CSS"} photo={cssPhoto} />
        <LanguageCard name={"Swift"} photo={swiftPhoto} />
        <LanguageCard name={"C#"} photo={csharpPhoto} />
        <LanguageCard name={"Java"} photo={javaPhoto} />
      </div>
    </div>
  );
};

const TechnologyBlock = () => {
  return (
    <div className="block technology-container">
      <div className="technology-title">Technologies</div>
      <Carousel>
        <CarouselItem>
          <TechCard name="XCode" photo={xcodePhoto} />
        </CarouselItem>
        <CarouselItem>
          <TechCard name="VS Code" photo={vscodePhoto} />
        </CarouselItem>
        <CarouselItem>
          <TechCard name="React" photo={reactPhoto} />
        </CarouselItem>
        <CarouselItem>
          <TechCard name="Node.js" photo={nodejsPhoto} />
        </CarouselItem>
        <CarouselItem>
          <TechCard name="Express.js" photo={expressPhoto} />
        </CarouselItem>
        <CarouselItem>
          <TechCard name="Bootstrap" photo={bootstrapPhoto} />
        </CarouselItem>
        <CarouselItem>
          <TechCard name="Firebase" photo={firebasePhoto} />
        </CarouselItem>
      </Carousel>
    </div>
  );
};

const LanguageCard = ({ name, photo }) => {
  return (
    <div className="language-card">
      <div className="language-card-name">{name}</div>
      <img className="language-card-photo" src={photo} alt="Logo" />
    </div>
  );
};

const TechCard = ({ name, photo }) => {
  return (
    <div className="tech-card">
      <div className="tech-card-name">{name}</div>
      <img src={photo} className="tech-card-photo" alt="Logo" />
    </div>
  );
};

const PortfolioBlock = () => {
  return (
    <div className="block home-portfolio-container">
      <div className="home-portfolio-title">Interested in what I've built?</div>
      <div className="portfolio-body-container">
        <div className="portfolio-body">Check out my portfolio</div>
        <Link to="/portfolio" className="portfolio-link">
          <div className="portfolio-body">here!</div>
        </Link>
      </div>
    </div>
  );
};

const ContactBlock = () => {
  return (
    <div className="block contact-container">
      <div className="contact-title">Want to reach out?</div>
      <div className="contact-body-container">
        <div className="contact-body">Contact me</div>
        <Link to="/contact" className="contact-link">
          <div className="contact-body">here!</div>
        </Link>
      </div>
    </div>
  );
};

export default AboutBlock;
