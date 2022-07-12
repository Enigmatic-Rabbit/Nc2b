import React from 'react';
import { Routes, Route, Link } from "react-router-dom"

export default function smallCard(lightDetails){
    return(
        <div className="cardSmall">
            <Link to={lightDetails.link}>
                <h2>{lightDetails.title}</h2>
            </Link>
            <Routes>
                <Route path={lightDetails.link} element={`../../pages/${lightDetails.pathing}`}/>
            </Routes>
        </div>
    )
}