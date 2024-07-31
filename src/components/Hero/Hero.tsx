import "./Hero.css";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Hero() {
  return (
    <main id="hero">
      <div className="socials">
        <FaXTwitter size={24} />
        <FaGithub size={24} />
        <FaLinkedin size={24} />
      </div>
      <div className="content">
        <span className="normal">Hi, I'm a</span>
        <span className="strong">Web Developer</span>
        <span className="normal upper">Developer to the rescue</span>
        <span className="light">Painting your Ideas to the Digital World</span>
        <button>Get Started</button>
      </div>
      <p className="pg-number">01</p>
      <div className="indicator upper">Next Page</div>
    </main>
  );
}
