

import "./MainPage.css"
import Header from "../Header/Header";
import CouplesPanel from "../CoupleEdigion/CouplesPanel/CouplesPanel";
import PartyEditionPanel from "../PartyEdition/PartyEditionPanel/PartyEditionPanel";



function MainPage () {


    return (

        <div> 
            <Header />
            <div className="MainPage-Panels-Flex">
                <CouplesPanel />
                <PartyEditionPanel />
            </div>
        </div>
    )
}; 

export default MainPage; 