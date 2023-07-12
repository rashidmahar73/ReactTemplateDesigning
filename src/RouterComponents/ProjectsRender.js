import React from "react"
import { Header } from "../Components/Header/Header.js"
import { ProjectsSection } from "../Components/ProjectsSection/ProjectsSection.js"
import { SayHi } from "../Components/SayHi/SayHi.js"
import { Container } from "react-bootstrap"
 const ProjectsRender=()=>{
    return(
        <React.Fragment>
            <Header/>
              <Container fluid className="ProjectSectionColor">
              <ProjectsSection />
              </Container>
            {/* <Container fluid style={{paddingTop:"6%"}}>
            <ProjectsSection/>
            </Container> */}
            <SayHi/>
        </React.Fragment>
    )
}
export default ProjectsRender;