import Link from "next/link";


export default function Nav (){
    return (
    <nav id="navbar">
        <button className="navbar__buttons">Views</button>
        <button className="navbar__buttons">Favorites</button>
        <button className="navbar__buttons">Highlight</button>
    </nav>)
}