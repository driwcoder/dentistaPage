import "./style.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="content-header">
        <Link to="/" className="logo">
          <img src="public/assets/dente.png" alt="" />
          <span>Dentes Saudaveis</span>
        </Link>
        <nav className="links">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/Contact" className="link">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
