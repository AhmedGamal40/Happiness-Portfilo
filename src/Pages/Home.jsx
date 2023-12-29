// import React, { useEffect, useRef } from "react";
import Articles from "./Article/ArticlesPage";
import Landing from "./Landing/Landing ";
import Gallery from "./Gallerys/Gallerys";
// import Features from "./Features/Features";
// import Services from "./Services/Services";
// import Work from "./Work/Work";
// import Events from "./Events/Events";
// import Stats from "./Stats/Stats";
// import Discount from "./Discount/Discount";
// import Testimonials from "./Reviews/Reviews";
// import Teams from "./Teams/Teams";
// import Skills from "./Skills/Skills";
// import PricingPlans from "./PricingPlans/PricingPlans";

function Home() {

//  const scrollButtonRef = useRef('none');
//   const scrollThreshold = 1000;

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY >= scrollThreshold) {
//         scrollButtonRef.current.style.display = 'block';
//       } else {
//         scrollButtonRef.current.style.display = 'none';
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
//     };
//   }, [scrollButtonRef]);

//   const handleScrollToTop = (event) => {
//     event.preventDefault();
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };


  return <div> 
    <Landing/>
    <Articles/>
    <Gallery/>
    {/* <Features />
    <Testimonials />
    <Teams />
    <Services/>
    <Skills />
    <Work/>
    <PricingPlans />
    <Events/>
    <Stats />
    <Discount /> */}
    {/* <button className="go-up" ref={scrollButtonRef} onClick={handleScrollToTop}>
      <i className="fa fa-angle-double-up fa-2x"></i>
    </button> */}
  </div>
}

export default Home;
