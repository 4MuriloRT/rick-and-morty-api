import "./cards.css";
import foto from "../../img/fotoRick.png"
import { Link } from "react-router-dom";

const Cards = () => {
    return(
        <div>
            <Link className="card-container" to="/personagem">
            <div className="card">
                <img src={foto} alt="Foto personagem"/>
                <div className="card-info">
                    <h3>Rick Sanchez</h3>
                    <span>Humano</span>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Cards;