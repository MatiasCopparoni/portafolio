import React from "react";
import "./DegreeCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

function DegreeCard(props) {
  const degree = props.degree;
  const theme = props.theme;

  const card_body = style({
    border: `1px solid ${theme.text}`,
    borderRadius: "7px",
    width: "90%",
    maxWidth: "900px",
    margin: "10px auto",
    boxShadow: `0px 0px 1px ${theme.text}`,
    transition: "all 0.2s ease-in-out",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 2px 10px ${theme.text}`,
    },
    "@media (max-width: 768px)": {
      width: "100%",
    },
  });

  return (
    <div className="degree-card">
      <Fade right duration={2000} distance="40px">
        <div {...card_body}>
          <div
            className="body-header"
            // style={{ backgroundColor: theme.accentColor }}
          >
            <div className="body-header-title">
              <h2 className="card-title" style={{ color: theme.text }}>
                {degree.title}
              </h2>
              <h3 className="card-subtitle" style={{ color: theme.text }}>
                {degree.subtitle}
              </h3>
            </div>
          </div>
          <div className="body-content">
            {degree.descriptions.map((sentence) => {
              return (
                <p
                  key={sentence}
                  className="content-list"
                  style={{ color: theme.text }}
                >
                  {sentence}
                </p>
              );
            })}
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default DegreeCard;
