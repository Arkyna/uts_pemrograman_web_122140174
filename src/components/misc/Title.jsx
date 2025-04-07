import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ subTitle, title }) => {
  return (
    <div className="text-center text-[#F5F5F5] uppercase font-semibold mt-[70px] mb-[30px] opacity-0 animate-fadeIn">
      <p className="text-[16px] mx-[10px]">{subTitle}</p>
      <h2 className="text-[32px] mt-[5px] normal-case">{title}</h2>
    </div>
  );
};

Title.propTypes = {
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Title;
