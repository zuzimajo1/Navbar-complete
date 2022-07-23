import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import {Links, Social} from "./Links"

export const Navbar = () => {
  const [Menu, SetMenu] = useState(false);
  
  return (
    <section>
      <div className="navbar">
        <div className="nav">
          <div className="imagediv">
            <div className="navbar-div">
            <h1 className="navbar-title">Navbar</h1>
            </div>
          </div>
          <div className="menudiv">
            <button type="button" onClick={() => SetMenu(!Menu)}>
              <GiHamburgerMenu className="menubutton" />
            </button>
          </div>
        </div>
        <div
          className={`${
            Menu ? `navigationdiv show-navigationdiv` : `navigationdiv`
          }`}
        
        >
          <ul className="wrapper" >
            {Links.map((links) => {
              const { id, to, name } = links;
              return (
                <Link className="navigations" to={to}>
                  <li key={id} className="wrappernavs">
                    <p>{name}</p>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="linksdiv">
          {Social.map((items) => {
            const { id, icon, url } = items;
            return (
              <a
                className="links"
                href={url}
                rel="noopener noreferrer"
                target="_blank"
                key={id}
              >
                {icon}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
