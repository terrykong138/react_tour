import React from 'react'
import aboutImg from "/src/assets/aboutimg.jpg"
const About = () => {
  return (
             <section className="about" id="about">
                <h2>about <span className="text-secondary">us</span></h2>
                <div className="about-content">
                    <div className="about-img">
                      <img src={aboutImg} alt="about"/>
                    </div>
                      <div className="text">
                        <h3>explore the difference</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <a href="#" className="btn-about">read more</a>
                      </div>
                </div>
              
            </section>
  );
};

export default About