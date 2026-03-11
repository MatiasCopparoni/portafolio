import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import { style } from "glamor";

function Header(props) {
  const theme = props.theme;
  const isLight = theme.name === "light";

  const headerStyle = {
    "--nav-bg": isLight
      ? "rgba(255, 255, 255, 0.92)"
      : "linear-gradient(135deg, rgba(32, 34, 38, 0.96), rgba(16, 18, 22, 0.92))",
    "--nav-border": isLight
      ? "1px solid rgba(15, 23, 42, 0.08)"
      : "1px solid rgba(255, 255, 255, 0.08)",
    "--nav-shadow": isLight
      ? "0 10px 30px rgba(15, 23, 42, 0.08)"
      : "0 10px 26px rgba(0, 0, 0, 0.28)",
    "--link-text": isLight ? "#0f172a" : "#e6edff",
    "--link-bg": isLight
      ? "rgba(15, 23, 42, 0.04)"
      : "rgba(255, 255, 255, 0.04)",
    "--link-hover-bg": isLight
      ? "rgba(15, 23, 42, 0.08)"
      : "rgba(255, 255, 255, 0.1)",
    "--link-hover-shadow": isLight
      ? "0 6px 16px rgba(15, 23, 42, 0.16)"
      : "0 6px 16px rgba(0, 0, 0, 0.3)",
    "--logo-bg": isLight
      ? "linear-gradient(135deg, rgba(124, 209, 247, 0.16), rgba(15, 23, 42, 0.05))"
      : "linear-gradient(135deg, rgba(88, 110, 255, 0.18), rgba(255, 255, 255, 0.08))",
    "--logo-border": isLight
      ? "1px solid rgba(15, 23, 42, 0.1)"
      : "1px solid rgba(255, 255, 255, 0.22)",
    "--logo-shadow": isLight
      ? "0 6px 14px rgba(15, 23, 42, 0.12)"
      : "0 6px 14px rgba(0, 0, 0, 0.16)",
    "--menu-mobile-bg": isLight
      ? "rgba(255, 255, 255, 0.95)"
      : "rgba(20, 22, 26, 0.95)",
    "--menu-mobile-border": isLight
      ? "1px solid rgba(15, 23, 42, 0.08)"
      : "1px solid rgba(255, 255, 255, 0.08)",
    "--navicon-color": isLight ? "#0f172a" : "#e6edff",
    "--hover-text": isLight ? "#0b1220" : "#ffffff",
  };

  const styles = style({
    cursor: "pointer",
    height: "45px",
    width: "45px",
    marginRight: "5px",
    marginLeft: "15px",
    paddingTop: "5px",
    borderRadius: "50%",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: props.theme.name === "light" ? "#7CD1F7" : "#292C3F",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `0 3px 8px ${
        props.theme.name === "light" ? "#F7D774" : "#646464"
      }`,
    },
  });

  const link = settings.isSplash ? "/splash" : "home";

  function changeTheme() {
    const nextTheme = isLight ? "dark" : "light";
    props.setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  }

  const icon =
    props.theme.name === "dark" ? (
      <HiMoon
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    ) : (
      <CgSun
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    );

  return (
    <header className="header" style={headerStyle}>
      <NavLink to={link} tag={Link} className="logo">
        <span style={{ color: theme.text }}></span>
        <span className="logo-name" style={{ color: theme.text }}>
          {greeting.logo_name}
        </span>
        <span style={{ color: theme.text }}></span>
      </NavLink>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <NavLink
            className="homei"
            to="/home"
            tag={Link}
            activeStyle={{ fontWeight: "bold" }}
            style={{ borderRadius: 5, color: theme.text }}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            className="ec"
            to="/education"
            tag={Link}
            activeStyle={{ fontWeight: "bold" }}
            style={{ borderRadius: 5, color: theme.text }}
          >
            Educación
          </NavLink>
        </li>
        <li>
          <NavLink
            className="xp"
            to="/experience"
            tag={Link}
            activeStyle={{ fontWeight: "bold" }}
            style={{ borderRadius: 5, color: theme.text }}
          >
            Experiencia
          </NavLink>
        </li>

        <li>
          <NavLink
            className="cr"
            to="/contact"
            tag={Link}
            activeStyle={{ fontWeight: "bold" }}
            style={{ borderRadius: 5, color: theme.text }}
          >
            Contacto y CV
          </NavLink>
        </li>

        <button {...styles} onClick={changeTheme}>
          {icon}
        </button>
      </ul>
    </header>
  );
}

export default Header;
