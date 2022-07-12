import React from 'react'
import LTitleCard from "./pagesubcom/pagetitlecard"
import SCard from "./pagesubcom/me-infocard"
export default function MainSec(){
    return(
        <div className="MainPage">
            <div className="openerView">
                <SCard
                    title="Name Cant Be Blank"
                    link="/"
                    pathing="HomepageContent/Home.js"
                />
                <LTitleCard
                    ima='portfoliodisp.png'
                    title="Portfolio"
                    link="/portfolio"
                    pathing="Porfoliopagecontent/Portfolio.js"
                    subtitle="Programming Projects"
                />
                <LTitleCard
                    ima="myskills.png"
                    title="Skills"
                    link="/skills"
                    pathing="SkillpageContent/Skills.js"
                    subtitle="See What I Know"
                />
                <LTitleCard
                    ima="myhistory.png"
                    title="History"
                    link="/history"
                    pathing="HistorypageContent/History.js"
                    subtitle="My Timeline"
                />
                <LTitleCard
                    ima="contactme.png"
                    title="Contact"
                    link="/contacts"
                    pathing="ContactpageContent/Contacts.js"
                    subtitle="Get In Touch"
                />
                <div className="cardSmall">
                    <h2>Name Cant Be Blank</h2>
                </div>

            </div>
            {/* <Hpage/> */}
        </div>
    )
}