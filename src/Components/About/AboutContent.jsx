import React from "react";
import "./AboutContent.css";
import crew from '../../Assets/crew.jpg'; 
import { Helmet } from "react-helmet-async";

const AboutContent = () => {
  return (
    <>
     <Helmet>
        <title>About Forefront Landscaping | Tucson</title>
        <meta name="description" content="Learn more about Forefront Landscaping, Tucson's professional landscaping company with years of experience and a passion for quality." />
        <meta name="keywords" content="Forefront Landscaping, about landscaping company, Tucson landscaping professionals" />
      </Helmet>
    <section className="about-us">
      <div className="about-container">
        <div className="about-text">
        <h2>About ForeFront Landscaping</h2>
<p className="tagline">"Landscaping Done Right!"</p>
<p>
  At ForeFront Landscaping, we do more than maintain yards — we elevate outdoor living. With deep roots in both residential and commercial landscaping, our team brings years of hands-on expertise and a passion for detail to every project.
</p>
<p>
  Whether you're dreaming of a pristine lawn, a bold hardscape feature, or a complete property transformation, we're here to bring your vision to life. Our dedicated crew is committed to quality, professionalism, and making your outdoor space something you're proud of.
</p>
<p>
  From the first cut to the final flourish, ForeFront Landscaping is where craftsmanship meets care.
</p>
        </div>
        <div className="about-img">
          <img src={crew} alt="ForeFront Landscaping Team" />
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutContent;




