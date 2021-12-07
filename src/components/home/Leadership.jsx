import React, { useState, useEffect, Profiler } from "react";

const Leadership = ({}) => {
  return (
    <div
      id="leadership"
      className="jumbotron jumbotron-fluid m-0"
      style={{ backgroundColor: "white" }}
    >
      <div className="container container-fluid">
        <h3 className="display-4 pb-5 text-center">{"GitHub Statistics (since 2014)"}</h3>
        <div className="row">



            <centre>
             <div>

              <a href="https://github.com/russelljjarvis/github-readme-stats">
                  <img align="center" src="https://github-readme-stats.vercel.app/api?username=russelljjarvis&text_color=daf7dc&bg_color=151515&theme=cobalt&show_icons=true?count_private=true&show_icons=true" />
               </a>
               </div>

             </centre>

            <centre>
             <div>



             <p href="https://github.com/russelljjarvis/russelljjarvis">
                <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=russelljjarvis&layout=compact&theme=cobalt&text_color=daf7dc&bg_color=151515&&hide=jupyter%20notebook,HTML,XSLT,OpenEdge%20ABL,AGS%20Script,AMPL,GAP,Roff,C,SCSS,Lua&langs_count=7)](https://github.com/russelljjarvis/github-readme-stats" />
             </p>
             </div>

           </centre>

              <div>

               <p href="GitHub Streak">
                  <centre>

                      <img align="right" src="https://github-readme-streak-stats.herokuapp.com/?user=russelljjarvis&theme=dark" />
                  </centre>

               </p>

             </div>



         </div>

      </div>
    </div>

  );
};

export default Leadership;
