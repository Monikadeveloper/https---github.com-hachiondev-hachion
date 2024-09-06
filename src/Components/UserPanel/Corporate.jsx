import React from 'react';
import './Course.css';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const Corporate = () => {
  return (
    <>
      <div className="corporate">
        <div className="corporate-content">
          <RiDoubleQuotesL className="quote-left" />
          <p className="corporate-para">
            Enhance Your Team's Skills Explore Our <span className="corporate-para-span">Corporate Training</span> Options
          </p>
          <RiDoubleQuotesR className="quote-right" />
        </div>
        <button className="know-more">Know More</button>
      </div>
    </>
  );
};

export default Corporate;
