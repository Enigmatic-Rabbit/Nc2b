import React from 'react';
import PortfolioCard from "./subcomponentP/PortfolioCard"
import Carddata from "./subcomponentP/nonGithubProjdata"
import Subhead from "./subcomponentP/PortfolioSubhead"

export default function Portfoliopage(){
    const pCards = Carddata.map(card => {
        // console.log(card);
        return <PortfolioCard
        key={card.id}
            pimg={card.image}
            pname={card.name}
            pdesc={card.description}
            plang= {card.language}
         />
    }) 
    
    return(
        <div className="PorfolioPage">
            <Subhead/>
            <div className="PortfolioDisplay">
                
                {pCards}
            </div>
            <div className="LanguageChartDisplay"></div>
        </div>
    )
}