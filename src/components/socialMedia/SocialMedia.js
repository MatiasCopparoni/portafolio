import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

function SocialMedia({ variant = "icons" }) {
  const handleCopy = (email) => {
    if (!email) return;
    navigator.clipboard.writeText(email);
    alert("Email copiado al portapapeles");
  };

  const socials = [
    {
      key: "github",
      label: "GitHub",
      href: socialMediaLinks.github,
      icon: "fab fa-github",
      className: "github",
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      href: socialMediaLinks.linkedin,
      icon: "fab fa-linkedin-in",
      className: "linkedin",
    },
    {
      key: "gmail",
      label: "Gmail",
      href: socialMediaLinks.gmail ? `mailto:${socialMediaLinks.gmail}` : "",
      icon: "fab fa-google",
      className: "google",
      action: () => handleCopy(socialMediaLinks.gmail),
      helper: socialMediaLinks.gmail || "Copiar correo",
    },
    {
      key: "instagram",
      label: "Instagram",
      href: socialMediaLinks.instagram,
      icon: "fab fa-instagram",
      className: "instagram",
    },
  ].filter(
    (item) =>
      (item.href && item.href.trim() !== "") ||
      (item.action && socialMediaLinks.gmail)
  );

  const cleanUrl = (url) => {
    if (!url) return "";
    const mail = url.startsWith("mailto:") ? url.replace("mailto:", "") : url;
    return mail.replace(/^https?:\/\//, "").replace(/\/$/, "");
  };

  if (variant === "list") {
    return (
      <ul className="social-list">
        {socials.map((item) => (
          <li key={item.key} className="social-list-item">
            <a
              href={item.href || "#"}
              onClick={
                item.action
                  ? (e) => {
                      e.preventDefault();
                      item.action();
                    }
                  : undefined
              }
              className={`icon-button ${item.className} social-list-link`}
              target={item.href ? "_blank" : undefined}
              rel={item.href ? "noopener noreferrer" : undefined}
            >
              <i className={item.icon}></i>
            </a>
            <div className="social-labels">
              <span className="social-name">{item.label}</span>
              <span className="social-handle">
                {item.href ? cleanUrl(item.href) : item.helper || ""}
              </span>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="social-media-div">
      {socials.map((item) => (
        <a
          key={item.key}
          href={item.href || "#"}
          className={`icon-button ${item.className}`}
          target={item.href ? "_blank" : undefined}
          rel={item.href ? "noopener noreferrer" : undefined}
          onClick={
            item.action
              ? (e) => {
                  e.preventDefault();
                  item.action();
                }
              : undefined
          }
          style={item.action ? { cursor: "pointer" } : undefined}
          aria-label={item.label}
        >
          <i className={item.icon}></i>
          <span></span>
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;
