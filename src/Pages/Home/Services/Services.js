import React, { useEffect, useState } from 'react';
import ServicesCart from './ServicesCart';

const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div>
      <div className='text-center'>
        <h2 className='text-2xl text-orange-800 font-bold'>Services</h2>
        <h1 className='text-6xl font-bold'>Our Service Area</h1>
        <p className=''>the majority have suffered alteration in some form, by injected humour,<br />
          or randomised words which don't look even slightly believable. </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          services.map(servise => <ServicesCart
            key={services._id}
            servise={servise}
          ></ServicesCart>)
        }
      </div>
    </div>
  );
};

export default Services;