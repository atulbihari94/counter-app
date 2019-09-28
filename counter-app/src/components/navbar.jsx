import React  from "react";
// Stateless functional components
const NavBar = ({totalCounters}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        NavBar
        <span className="badge badge-pill badge-secondry">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
