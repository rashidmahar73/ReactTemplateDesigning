import React from "react"
import { Header } from "../Components/Header/Header.js"
import { Services } from "../Components/Services/Services.js"
import { SayHi } from "../Components/SayHi/SayHi.js"
import { Container } from "react-bootstrap"
 const ServicesRender=()=>{
    return (
        <React.Fragment>
            <Header/>
            <Container fluid className="ProjectSectionColor">
            <Services/>
            </Container>
            <SayHi/>
        </React.Fragment>
    )
}
export default ServicesRender;