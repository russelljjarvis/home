import React from "react";
import { Container } from "react-bootstrap";

const Experience = () => {
    return (
        <section className="section">
          <Container className="p-5">
            <h1 className="display-4 pb-5 mb-4 mr-5 pr-0 text-left">{"Science Writing"}</h1>
            <div className="Cell">
                <p>While completing a PhD I wrote a PhD dissertation, and coauthored numerous scientific documents.</p>
                <p><strong>Peer Reviewed</strong></p>
                <p><a href="https://royalsocietypublishing.org/doi/10.1098/rstb.2017.0381">Open Worm C. Elegans publication</a></p>
                <p><strong>PhD Dissertation</strong></p>
                <p><a href="https://www.proquest.com/openview/4454bb4e9de74e78ed42343544996667/1.pdf">Dissertation</a></p>
                <p>
                  <a href="https://orcid.org/0000-0003-0281-2849">
                    <img src="https://img.shields.io/badge/ORCID-0000--0001--9813--3167-9745f5?style=flat-square.svg" alt="ORCID" />
                  </a>
                </p>
            </div>

            <h1 className="display-4 pb-5 mb-4 mr-5 pr-0 text-left">{"Data Driven Web Applications"}</h1>
                <div className="Cell">
                <div>
                    <p>
                        In my spare time I have made these open source data driven web-apps and dashboards.
                    </p>
                </div>
                </div>
            <div>
                <div className="Cell">
                    <p><a href="https://share.streamlit.io/russelljjarvis/scienceaccess/app.py">Searchable Exploration of the Readability of Scientific Authors</a></p>
                    <p><a href="https://share.streamlit.io/russelljjarvis/odor2action/app.py">Bespoke Interactive Social Network Visualizations</a></p>
                    <p><a href="https://share.streamlit.io/russelljjarvis/sirg_geo_net/main/app3.py">Interactive Geographic Network Visualization</a></p>
                    <p><a href="https://calm-dusk-34444.herokuapp.com/">Visualization of author/co-author Networks</a></p>
                    <p><a href="https://share.streamlit.io/russelljjarvis/council-emissions-calculator/documentation_changes/scripts/app.py">Visualization of Mock Data for a Code For Australia, CIVIC Makers Project.</a></p>
                </div>
            </div>

            <h1 className="display-4 pb-5 mb-4 mr-5 pr-0 text-left">{"Licenses and Certifications"}</h1>
            <div className="Cell">
                <div style={{ marginBottom: "1rem" }}>
                    <p style={{ margin: 0 }}><strong>Manual Drivers License</strong></p>
                    <p style={{ margin: 0 }}>VicRoads</p>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <p style={{ margin: 0 }}><strong>Remote Pilot Licence</strong></p>
                    <p style={{ margin: 0 }}>Civil Aviation Safety Authority</p>
                    <p style={{ margin: 0 }}>Issued Oct 2025</p>
                </div>
            </div>

            <h1 className="display-4 pb-5 mb-4 mr-5 pr-0 text-left">{"Volunteering"}</h1>
            <div className="Cell">
                <div style={{ marginBottom: "1rem" }}>
                    <p style={{ margin: 0 }}><strong>Reviewer</strong></p>
                    <p style={{ margin: 0 }}>Frontiers In Neuroinformatics</p>
                    <p style={{ margin: 0, color: "#666" }}>Jun 2023 – Sep 2023 · 4 mos</p>
                    <p style={{ margin: 0, color: "#666" }}>Science and Technology</p>
                    <p style={{ marginTop: "0.5rem" }}>
                        I reviewed: <a href="https://www.frontiersin.org/journals/neuroinformatics/articles/10.3389/fninf.2023.1099510/full">A scalable implementation of the recursive least-squares algorithm for training spiking neural networks</a>
                    </p>
                </div>
            </div>
          </Container>
        </section>
    );
}

export default Experience;
