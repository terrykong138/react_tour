import React from 'react';
import { tours } from "../data.js";
import Tour from './Tour';
import Title from './Title.jsx';
const Tours = () => {
  return (
         <article className="tours" id="tours">
          <Title title="feature" subtitle="tours" />
          {/* <h2>feature <span className="text-secondary">tours</span></h2> */}
        <div className="cards">
          {tours.map((tour) => 
             ( 
              <Tour key={tour.id} { ... tour} />
           ))}   
       </div> 
      </article>
     
  );
};

export default Tours;