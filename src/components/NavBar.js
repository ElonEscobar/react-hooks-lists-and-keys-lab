import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const listLinks = links.map((link) =>
    <a href={`#`+link} key={link.toString()}>
      {link}
    </a>  
  )
  return (
    <nav>
      {listLinks}
    </nav>
  );
}

export default NavBar;
