import React from 'react';

const ServicesCart = ({ servise }) => {
  const { img, price, title } = servise;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className='text-2xl text-orange-600 font-semibold'>Price:${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCart;