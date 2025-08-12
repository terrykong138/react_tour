import React from 'react'
import Title from './Title';
import Service from './Service';
import { services } from '../data';
const Services = () => {
  return (
          <main className="services" id="services">
            <Title title="our" subtitle="services" />
        {/* <h2>our <span className="text-secondary">services</span></h2> */}
        <div className="services-content">
          {services.map((service) => (
              <Service key={service.id} { ... service} />
          )
            
          )}

        </div>
        
      </main>
  );
};

export default Services