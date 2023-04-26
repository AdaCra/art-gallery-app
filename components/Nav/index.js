import { useState } from "react";
import Link from "next/link";
import Button from "../Button";

export default function Nav() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <nav id="navbar">
      <ul>
        <li>
          <Link className="navbar__link" href={"/"}>
            Home
          </Link>
        </li>
        <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <span className="navbar__dropDown">Views</span>
          {showDropdown && (
            <ul className="navbar__dropDown__menu">
              <li>
                <Link className="navbar__link" href="/List">
                  List View
                </Link>
              </li>
              <li>
                <Link className="navbar__link" href="/Spotlight/0">
                  Spotlight View
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link className="navbar__link" href={`/Spotlight/0`}>
            Highlight
          </Link>
        </li>
        <li>
          <button id="navbar__favouritesButton" className="navbar__link">
            Toggle Favourites
          </button>
        </li>
        <li>
          <Link className="navbar__link" href={"/About"}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
