
import React from "react";

function Stats() {
  return <div>
    {/* <!-- Start Stats --> */}
    <div className="stats" id="stats">
        <h2 className="main-title">Our Stats</h2>
        <div className="container">
            <div className="box">
                <i className="fa fa-user fa-2x fa-fw"></i>
                <span className="number" data-goal="150">300</span>
                <span className="text">Clients</span>
            </div>
            <div className="box">
                <i className="fa fa-code fa-2x fa-fw"></i>
                <span className="number" data-goal="135">400</span>
                <span className="text">Projects</span>
            </div>
            <div className="box">
                <i className="fa fa-globe fa-2x fa-fw"></i>
                <span className="number" data-goal="50">12</span>
                <span className="text">Countries</span>
            </div>
            {/* <div className="box">
                <i className="fa fa-money fa-2x fa-fw"></i>
                <span className="number" data-goal="500">500K</span>
                <span className="text">Money</span>
            </div> */}
        </div>
    </div>
    {/* <!-- End Stats --> */}
  </div>;
}

export default Stats;
