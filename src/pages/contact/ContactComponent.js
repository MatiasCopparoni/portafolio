import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import { style } from "glamor";

// importar el PDF
import CV from "../../assests/CV.pdf";

const ContactData = contactPageData.contactSection;

function Contact(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  // función de descarga
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Matias_Copparoni_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />

      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div contact-card">
            <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                alt=""
              />
            </div>

            <div className="contact-heading-text-div">
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
            </div>
          </div>

          <div className="contact-socials-block">
            <h2 className="contact-subheading" style={{ color: theme.text }}>
              Contactame
            </h2>

            <div className="contact-socials">
              <SocialMedia variant="list" />
            </div>
          </div>

          <div className="resume-btn-wrapper">
            <button
              {...styles}
              className="general-btn resume-btn"
              onClick={downloadPDF}
            >
              Descargar CV
            </button>
          </div>
        </Fade>
      </div>

      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Contact;
