import { useState } from "react";
import Link from "next/link";
import Button from "../Button";

export default function Nav({ data }) {
  const [currentView, setCurrentView] = useState(true);
  const toggleViewLink = () => {
    setCurrentView(!currentView);
  };
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <nav id="navbar">
      <ul>
        <li>
          <Link className="navbar__link" href={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={toggleViewLink}
            className="navbar__link"
            href={currentView ? "/List" : `/Tile/${data[1].slug}`}
          >
            {currentView ? "List View" : "Tile View"}
          </Link>
        </li>
        <li>
          <Link
            className="navbar__link"
            href="/Spotlight/"
          >
            Spotlight
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
