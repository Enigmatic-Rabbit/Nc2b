import React from 'react';
// import ClosureWIP from "../images/wip.png";
// import Contactimg from "../images/contactme.png";
// import Historyimg from "../images/myhistory.png";
// import Skillsimg from "../images/myskills.png";
import Portfolioimg from "../images/portfoliodisp.png";
export default function ExpCard(){
    return(
        <div className="Testcardcontent">
            <img
                src={Portfolioimg}
                alt="Ada Church/Closure from Arknights"
                className = "TcardWIPimg"
            />
            <h2>Placeholder Project Name</h2>
            <h3>2022</h3>
            <h3>Placeholder Project Language</h3>
        </div>
    )
}