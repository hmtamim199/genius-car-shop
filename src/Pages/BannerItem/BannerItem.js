import React from 'react';

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">

      <div className='img-gradient'>
        <img alt='' src={image} className="w-full" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-2">❮</a>
        <a href={`#slide${next}`} className="btn btn-circle">❯</a>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4 ">
        <h1 className='text-6xl text-white'>Affordable <br />
          Price For Car <br />
          Servicing
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 w-2/5 ">
        <p className='text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4 w-2/5 ">

        <button className="btn btn-outline btn-warning mr-5">Warning</button>
        <button className="btn btn-warning">Warning</button>
      </div>
    </div>
  );
};

export default BannerItem;