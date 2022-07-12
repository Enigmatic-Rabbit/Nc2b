import React from 'react';

export default function PcardOut(cardContent){
    return(
        <div className="Portfoliocard">
            <img
                src={cardContent.pimg}
                alt=""
                className="PortfolioSmall"
            />
            <h2>{cardContent.pname}</h2>
            <p>{cardContent.pdesc}</p>
            <h3>{cardContent.plang}</h3>
        </div>
    )
}