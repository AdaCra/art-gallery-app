import { useRouter } from "next/router";
import Link from "next/link";
import styled, { css } from "styled-components";

export default function MenuBar({ data, menuIsOpen }) {
  const router = useRouter();
  const currentUrl = router.asPath;

  const isCurrentPage = (path) => currentUrl.includes(path);

  return (
    <>
      <NavItem>
        <NavLink
          href={"/list"}
          $menuIsOpen={menuIsOpen}
          $currentlyActive={isCurrentPage("/list")}
        >
          List{" "}
        </NavLink>
        <NavLink
          href={isCurrentPage("/list") ? `/tile/${data[0].slug}` : "list"}
          $currentlyActive={isCurrentPage("/tile") || isCurrentPage("/list")}
          $menuIsOpen={menuIsOpen}
        >
          /
        </NavLink>
        <NavLink
          href={`/tile/${data[0].slug}`}
          $menuIsOpen={menuIsOpen}
          $currentlyActive={isCurrentPage("/tile")}
        >
          {" "}
          Tile
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href={"/spotlight/"}
          $menuIsOpen={menuIsOpen}
          $currentlyActive={isCurrentPage("/spotlight")}
        >
          Spotlight
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href={"/favorites"}
          $menuIsOpen={menuIsOpen}
          $currentlyActive={isCurrentPage("/favorites")}
        >
          Favorites
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href={"/about"}
          $menuIsOpen={menuIsOpen}
          $currentlyActive={isCurrentPage("/about")}
        >
          About
        </NavLink>
      </NavItem>
    </>
  );
}

const highlightStyles = `
opacity: 0.99;
text-shadow: 0px 0px 4px var(--dm_text_color_title),
0px 0px 8px var(--dm_text_color_title),
0px 0px 16px var(--dm_text_color_title), 2px 2px 3px #d42cca,
2px -2px 3px #d42cca, -2px -2px 3px #d42cca, -2px 2px 3px #d42cca;
`;

const SpanDash = styled.span`
  text-decoration: none;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-style: normal;
  color: var(--dm_text_color_title);
  opacity: 0.5;
  line-height: 40px;
  ${highlightStyles}

  @media (max-width: 510px) {
    align-vertical: middle;
    animation: ${({ $menuIsOpen }) =>
      $menuIsOpen ? `grow 0.3s  ease-out` : `none`};
    font-size: 18px;
  }

  &:hover {
    ${highlightStyles}
  }

  @keyframes grow {
    0% {
      opacity: 0;
      line-height: 0px;
      opacity: 0.5;
    }
    100% {
      opacity: 1;
      line-height: 40px;
      opacity: 0.5;
    }
  }
`;

const NavItem = styled.li`
  width: 100%;
  list-style: none;

  @media (max-width: 510px) {
    padding-left: 15px;
    align-vertical: middle;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 100%;
      height: 2px;
      background: var(--dm_text_color_title);
      border-radius: 2px;
      box-shadow: 0px 0px 1px var(--dm_text_color_title), 0px 0px 2px var(--dm_text_color_title), 0px 0px 8px var(--dm_text_color_title),
        2px 2px 1px #d42cca, 2px -2px 1px #d42cca, -2px -2px 1px #d42cca,
        -2px 2px 1px #d42cca;
  }

`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  color: var(--dm_text_color_title);
  opacity: 0.5;
  line-height: 40px;
  ${({ $currentlyActive }) => ($currentlyActive ? highlightStyles : ``)}

  @media (max-width: 510px) {
    align-vertical: middle;
    animation: ${({ $menuIsOpen }) =>
      $menuIsOpen ? `grow 0.3s  ease-out` : `none`};
    font-size: 18px;
  }

  &:hover {
    ${highlightStyles}
  }

  @keyframes grow {
    0% {
      opacity: 0;
      line-height: 0px;
      opacity: 0.5;
    }
    100% {
      opacity: 1;
      line-height: 40px;
      opacity: 0.5;
    }
  }
`;
