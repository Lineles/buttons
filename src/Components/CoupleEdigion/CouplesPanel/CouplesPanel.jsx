import { Link } from "react-router-dom";
import "./CouplesPanel.css"

function CouplesPanel () {

    return (

        <Link 
            to="/coupleEdition" className="Couples-Panel">
                <button className="Couples-button-header">!!! BUTTONS !!!</button>
                <h1 className="Couples-Panel-h1"> Couples Edition</h1>
        
        </Link>
    )
};

export default CouplesPanel; 