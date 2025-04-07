// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

// const TypingEffect = ({ text, speed }) => {
//   const [displayed, setDisplayed] = useState('');

//   useEffect(() => {
//     setDisplayed('');
//     let index = 0;
//     const interval = setInterval(() => {
//       setDisplayed((prev) => prev + text[index]);
//       index++;
//       if (index === text.length) {
//         clearInterval(interval);
//       }
//     }, speed);

//     return () => clearInterval(interval);
//   }, [text, speed]);

//   return <span>{displayed}</span>;
// };

// TypingEffect.propTypes = {
//   text: PropTypes.string.isRequired,
//   speed: PropTypes.number,
// };

// TypingEffect.defaultProps = {
//   speed: 150,
// };

// export default TypingEffect;
// NOT USED DEPRECATED CODE