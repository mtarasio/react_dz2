import "./Header.scss";
import Chevron from "./img/update.png";
import User2 from "./img/user.png";
import Hamburger from "./img/burger.svg";

function Header({ title, avatar }) {
  return (
    <header className="header">
      <div className="burger">
        <img className="burger-img" src={Hamburger} alt="icon" />
      </div>
      {title}: {avatar}
      <div className="icons">
        <img className="chevron" src={Chevron} alt="icon" />
        <img className="user" src={User2} alt="icon" />
      </div>
    </header>
  );
}

export default Header;