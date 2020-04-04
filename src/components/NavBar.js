import React from "react";
import { Fragment } from "react";

let list = [
  {
    link: "About us",
    to: "#",
    color: "#00b39b"
  },
  {
    link: "Career",
    to: "#",
    color: "#ababab"
  },
  {
    link: "Departments",
    to: "#",
    color: "#ababab",
    submenu: [
      {
        link: "Marketing",
        to: "#",
        color: "#ababab"
      },
      {
        link: "Customer Success & Sales",
        to: "#",
        color: "#ababab"
      },
      {
        link: "IT, Product, Design & UX",
        to: "#",
        color: "#ababab"
      },
      {
        link: "Finance & Administration",
        to: "#",
        color: "#ababab"
      },
      {
        link: "HR & more",
        to: "#",
        color: "#ababab"
      }
    ]
  }
];

const Link = ({ link, color, padding, to }) => (
  <a href={to} style={{ color: color, padding: padding }} className="link">
    {link}
  </a>
);

const SubMenu = ({ submenu }) => (
  <Fragment>
    {submenu.map(item => (
      <li>
        <Link to={item.to} link={item.link} color={item.color} />
      </li>
    ))}
  </Fragment>
);

const NavMenu = props =>
  props.list.map(link => {
    return (
      <Fragment>
        <nav>
          <ul className="menu-nav">
            <div className="nothing">
              <li>
                <Link to={link.to} link={link.link} color={link.color} />
              </li>
              {link.submenu && (
                <Fragment>
                  <div className="div-dropdown">
                    <ul>
                      <SubMenu submenu={link.submenu} />
                    </ul>
                  </div>
                </Fragment>
              )}
            </div>
          </ul>
        </nav>
      </Fragment>
    );
  });

const NavBar = () => (
  <div class="NavBar">
    <NavMenu list={list} />
  </div>
);

export default NavBar;
