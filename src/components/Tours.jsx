import React from 'react'
import mountainvillage1 from "/src/assets/mountainvillage1.png"
import mountainvillage2 from "/src/assets/mountainvillage2.png"
import mountainvillage3 from "/src/assets/mountainvillage3.png"
import mountainvillage4 from "/src/assets/mountainvillage4.png"

const Tours = () => {
  return (
         <article className="tours" id="tours">
          <h2>feature <span className="text-secondary">tours</span></h2>
        <div className="cards">
           <div className="card">
              <div className="card-img">
                <img src={mountainvillage1} alt=""/>
              <p>Aug 1th 2025</p>
              </div>
             <div className="card-content">
             <h3>adventure</h3>
             <p>Lorem ipsum dolor sit amet.</p>
             <ul>
                  <li><i className="fa-solid fa-map"></i>China</li>
                  <li>6 Day</li>
                  <li>$2100</li>
             </ul>          
             </div>
           </div>
           <div className="card">
              <div className="card-img">
                <img src={mountainvillage2} alt="" />
              <p>Aug 1th 2025</p>
              </div>
             <div className="card-content">
             <h3>adventure</h3>
             <p>Lorem ipsum dolor sit amet.</p>
             <ul>
                  <li><i className="fa-solid fa-map"></i>China</li>
                  <li>6 Day</li>
                  <li>$2100</li>
             </ul>          
             </div>
           </div>
           <div className="card">
              <div className="card-img">
                <img src={mountainvillage3} alt="" />
              <p>Aug 1th 2025</p>
              </div>
             <div className="card-content">
             <h3>adventure</h3>
             <p>Lorem ipsum dolor sit amet.</p>
             <ul>
                  <li><i className="fa-solid fa-map"></i>China</li>
                  <li>6 Day</li>
                  <li>$2100</li>
             </ul>          
             </div>
           </div>
           <div className="card">
              <div className="card-img">
                <img src={mountainvillage4} alt="" />
              <p>Aug 1th 2025</p>
              </div>
             <div className="card-content">
             <h3>adventure</h3>
             <p>Lorem ipsum dolor sit amet.</p>
             <ul>
                  <li><i className="fa-solid fa-map"></i>China</li>
                  <li>6 Day</li>
                  <li>$2100</li>
             </ul>          
             </div>
           </div>
         
       </div>
        
      </article>
     
  );
}

export default Tours