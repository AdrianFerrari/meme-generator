import trollFace from "../images/troll_face.png";
import "../styles/Header.css"

function Header() {
    return (
        <div className="header purple">
            <div className="header-title">
                <img src={trollFace} alt="troll face"/>
                <h1>Meme Generator</h1>
            </div>
            <h3>Reac Course - Project 3</h3>
        </div>
    );
}

export default Header;