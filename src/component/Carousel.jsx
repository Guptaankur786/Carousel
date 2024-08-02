import { useState } from 'react';
import data from '../data.js';

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const prevHandler = () => {
    setIndex((prev) => (prev < 1 ? data.length-1 : prev - 1));
  };
  const nextHandler = () => {
    setIndex((prev) => (prev > 3 ? 0 : prev + 1));
  };
  return (
    <div className="carousel-container">
      <button onClick={prevHandler}>Prev</button>
      <div className="image-container">
        <div key={data[index].id} className="slide">
          <img src={data[index].value} width="800" />
        </div>
      </div>
      <button onClick={nextHandler}>Next</button>
    </div>
  );
};

export default Carousel;
