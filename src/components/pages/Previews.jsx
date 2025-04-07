import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import game from "../../assets/game.jpg";
import album from "../../assets/1.jpg";
import tech from "../../assets/tech.png";

const Previews = ({
  images = [
    { src: game, alt: "game", title: "List of Games", route: "/games" },
    { src: album, alt: "album", title: "List of Music Albums", route: "/album" },
    { src: tech, alt: "tech", title: "List of Techs", route: "/tech" },
  ],
}) => {
  return (
    
    <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-center gap-6 w-[90%] my-20 mx-auto bg-transparent">
      {images.map((img, index) => (
        <div key={index} className="basis-full sm:basis-[31%] text-center">
          <h3 className="text-lg font-semibold mb-2 text-[#F5F5F5]">{img.title}</h3>
          <Link to={img.route}>
            <img
              src={img.src}
              alt={img.alt}
              className="w-full rounded-[10px] block shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

Previews.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    })
  ),
};

Previews.defaultProps = {
  images: [
    { src: game, alt: "game", title: "List of Games", route: "/games" },
    { src: album, alt: "album", title: "List of Music Albums", route: "/album" },
    { src: tech, alt: "tech", title: "List of Techs", route: "/tech" },
  ],
};

export default Previews;
