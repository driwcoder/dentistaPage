/* eslint-disable react/prop-types */
import Footer from "../Footer";
import Header from "../Header";
import "./style.css";

export default function Conteudo(props) {
  return (
    <div className="content-conteudo">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
