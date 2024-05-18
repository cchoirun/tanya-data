import React from "react";
import { Link } from "react-scroll";

const NavLink = ({href, link}) => {
    return (
        <li className="mr-8 list-none cursor-pointer">
            <Link to={href} spy={true} smooth={true} duration={500} offset={-50} className="transition-all duration-300 ">
                {link}
            </Link>
        </li>
    );
};

export default NavLink;