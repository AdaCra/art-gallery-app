import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

export default function MenuBar({ data }) {
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
        <NavLink href="/spotlight/">Spotlight</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/favorites">Favorites</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href={"/about"}>About</NavLink>
      </NavItem>
    </>
  );
}



const NavItem = styled.li`
  margin: 0;
  padding: 0;
  width: 100%;
  text-decoration: none;
  list-style: none;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  color: white;
`;
