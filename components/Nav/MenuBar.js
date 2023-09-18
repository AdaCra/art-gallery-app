import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

export default function MenuBar({ data, menuIsOpen }) {
  const router = useRouter();
  const currentUrl = router.asPath;

  return (
    <>
      <NavItem>
        <NavLink
          href={currentUrl.includes("/tile") ? "/" : `/tile/${data[0].slug}`}
        >
          {currentUrl.includes("/tile") ? "List View" : "Tile View"}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href={"/spotlight/"} $menuIsOpen={menuIsOpen}>
          Spotlight
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href={"/favorites"} $menuIsOpen={menuIsOpen}>
          Favorites
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href={"/about"} $menuIsOpen={menuIsOpen}>
          About
        </NavLink>
      </NavItem>
    </>
  );
}

const NavItem = styled.li`
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
  @media (max-width: 510px) {
    padding-left: 15px;
    align-vertical: middle;
    border-bottom: 2px solid var(--dm_text_color_title);
  }
`;

const NavLink = styled(Link)`
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  color: white;
  line-height: 40px;
  @media (max-width: 510px) {
    align-vertical: middle;
    animation: ${({ $menuIsOpen }) =>
      $menuIsOpen ? `grow 0.5s  ease-out` : `none`};
  }

  @keyframes grow {
    0% {
      opacity: 0;
      line-height: 0px;
    }
    100% {
      opacity: 1;
      line-height: 40px;
    }
  }
`;
