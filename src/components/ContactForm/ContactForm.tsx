import { AnimatedText } from "../Micros";
import "./ContactForm.css";
import contactImage from "/myImage.jpeg"; // Assuming the image is in the public folder

const ContactForm = () => {
  return (
    <section id="contactform">
      <div className="contact-form-container">
        <div className="contact-form-header">
          <div>
            <AnimatedText
              delay={0}
              as={"h2"}
              text="Contact"
              hideCursor
              className="contact-form-h2"
            />
          </div>
          <div>
            <AnimatedText
              delay={0}
              as={"h3"}
              text="I'd Love To Hear From You."
              className="contact-form-h3"
            ></AnimatedText>
          </div>
        </div>
        <div className="form-and-image-wrapper">
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea placeholder="Message / Body"></textarea>
            </div>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
