import React, { useState, useEffect, Profiler } from "react";

const Leadership = ({}) => {
  return (
    <div
      id="leadership"
      className="jumbotron jumbotron-fluid m-0"
      style={{ backgroundColor: "white" }}
    >
      <div className="container container-fluid">
        <h2 className="display-4 pb-5 text-center">{"Noteable Anecdotes"}</h2>
        <div className="row">

            <centre>
            <ul>
            <p>
              <li>
                I have been invited to join a volunteer web scraping project. I noticed that the voluntary project was aligned with FOSS principles but was not currently using them. When I joined the team as a volunteer, I used my influence and initiative to: Switch the team from MATLAB to Python-based development. I also got the team to adopt Continuous Integration and social coding practices. I set up a Git repository, a docker container, and a CircleCI .yml script. I later convinced the team of developers and writers to publish in the Journal of Open Source software and write a Preprint paper on the Open Science Portal.
              </li>

            </p>
            <p>
              <li>

                At a science outreach evening called the ASU Night of the Open Door, I convinced my laboratory to visualize 3D neuron cell structure in virtual reality. Since our lab was a theoretical/computational lab having a virtual reality product to show people greatly assisted with our labs capacity to communicate abstract knowlege.
              </li>

            </p>
            </ul>

            </centre>

        </div>
      </div>
    </div>
  );
};

export default Leadership;
