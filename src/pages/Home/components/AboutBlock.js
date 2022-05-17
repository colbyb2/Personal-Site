import React from "react";
import Carousel, { CarouselItem } from "../../../components/Carousel";
import { Link } from "react-router-dom";
import "./AboutBlock.css";

//Language Photos
const cssPhoto =
  "https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png";
const htmlPhoto = "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png";
const csharpPhoto =
  "https://cdn.icon-icons.com/icons2/2415/PNG/512/csharp_original_logo_icon_146578.png";
const swiftPhoto = "https://developer.apple.com/swift/images/swift-og.png";
const javascriptPhoto =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png";
const javaPhoto =
  "https://cdn.vox-cdn.com/thumbor/VoXJ8IaxCj5_U-366JhtUHLkdQ0=/0x0:640x427/1400x1050/filters:focal(0x0:640x427):format(jpeg)/cdn.vox-cdn.com/assets/1087137/java_logo_640.jpg";

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
const expressPhoto =
  "https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png";

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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo,
        fugiat asperiores? Suscipit, culpa cupiditate, quibusdam maxime
        laudantium iste autem necessitatibus a sequi repellat cumque dolorum
        nisi beatae veritatis ducimus veniam!
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
      <img className="language-card-photo" src={photo} alt="Photo" />
    </div>
  );
};

const TechCard = ({ name, photo }) => {
  return (
    <div className="tech-card">
      <div className="tech-card-name">{name}</div>
      <img src={photo} alt="Photo" className="tech-card-photo" />
    </div>
  );
};

const PortfolioBlock = () => {
  return (
    <div className="block portfolio-container">
      <div className="portfolio-title">Interested in what I've built?</div>
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
