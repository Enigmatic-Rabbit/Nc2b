import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
// import tes from "../../pages/SkillpageContent/Skills"
export default function bigCard(cardDetails) {
    console.log(cardDetails.link);
    return (
        <div className="cardLarge">
            <Link to={cardDetails.link}>
                {/* <img 
                    src={`./images/${cardDetails.ima}`}
                    // src={test}
                    alt=""
                /> */}
                <h2>{cardDetails.title}</h2>
                <h3>{cardDetails.subtitle}</h3>
            </Link>
            <Routes>
                <Route path={cardDetails.link} element={`../../pages/${cardDetails.pathing}`}/>
            </Routes>
        </div>
    )
}