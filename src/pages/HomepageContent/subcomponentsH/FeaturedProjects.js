// import Testcard from '../../Maincomponents/ProjectcardTest';
export default function ProjectsOverview(FeatProjDetails){
    return(
        <div className="FeaturedProjectsSection">
            <h2>Featured Projects</h2>
            <div className="displayedFeaturedProjects">
               {/* <img 
                src={`./images/${cardDetails.ima}`}
                // src={test}
                alt=""
            /> */}
            <h3>{FeatProjDetails.title}</h3>
            <h4>{FeatProjDetails.language}</h4>
            <p>{FeatProjDetails.date}</p>
            </div>
        </div>
    )
}
