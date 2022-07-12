import React from "react"
import Overview from "./subcomponentsH/Overview.js"
import FeaturedProjects from "./subcomponentsH/FeaturedProjects.js"
export default function Homepage(){
    return(
        <div className="Homepagecontent">
            <Overview/>
            <FeaturedProjects
                ima=""
                title="Placeholder C Project"
                date="202X-0"
                language="C"
            />
            <FeaturedProjects
                ima=""
                title="Placeholder Java Project"
                date="202X-1"
                language="Java"
            />
            <FeaturedProjects
                ima=""
                title="Placeholder Python Project"
                date="202X-2"
                language="Python"
            />
            <FeaturedProjects
                ima=""
                title="Placeholder Haskell Project"
                date="202X-3"
                language="Haskell"
            />
        </div>
        
    )
}