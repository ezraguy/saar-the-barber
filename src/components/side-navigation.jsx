import React, { useState } from "react";
import "../scss/side-navigation.scss";
function SideNavigation() {
  let [links, setLinks] = useState([
    { id: 1, link: "#home", className: "round-link" },
    { id: 2, link: "#aboutMe", className: "round-link" },
  ]);

  const navigateToDiv = (link, id) => {
    const Templinks = [...links];
    //setting the active link
    Templinks[id - 1].className = "round-link activeLink";
    //making all the other links not active
    for (let index = 0; index < Templinks.length; index++) {
      const element = Templinks[index];
      if (index !== id - 1) element.className = "round-link";
    }
    window.location = link;
    setLinks(Templinks);
  };

  return (
    <div className="side-navigation">
      <ul>
        {links.map((link) => {
          return (
            <div
              key={link.id}
              onClick={() => navigateToDiv(link.link, link.id)}
              className={link.className}
            ></div>
          );
        })}
      </ul>
    </div>
  );
}

export default SideNavigation;
