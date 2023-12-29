import React from "react";
import Typed from 'react-typed';
import landing from '../../Assets/landing-image.png'

function Landing () {
  return <div>
        {/* <!-- Start Landing --> */}
        <div className="landing">
            <div className="container">
                <div className="text">
                    <Typed
                            className='type'
                                strings={[
                                    'Welcome to',
                                    ' Happiness Coders Company'
                                ]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop  />
                        <h1 className="">
                            <span className="">Web & Applications</span>{" "}
                            <br />
                            Services
                        </h1>
                        <p>Happiness Coders a leading technology company that specializes in website development and mobile application creation. With a team of highly skilled professionals,Happiness Coders to deliver innovative and user-centric digital solutions to meet the diverse needs of its clients.</p>
                </div>
                <div className="image">
                    <img src={landing} alt=""/>
                </div>
            </div>
            <a href="#articles" className="go-down">
                <i className="fa fa-angle-double-down fa-2x"></i>
            </a>
        </div>
        {/* <!-- End Landing --> */}
     </div>;
}

export default Landing ;
