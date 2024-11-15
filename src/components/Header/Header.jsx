import logo from "../../assets/logo-magic.png";
import Nav from "../Nav/Nav";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo de Magic" className="logo"/>
      <Nav/>
    </header>
  )
}

export default Header