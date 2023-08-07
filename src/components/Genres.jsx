import PropTypes from 'prop-types';
const Genres = ({ genres }) => {
  return (
    <div className="genres">
      {genres.map((genre, index) => {
        return (
          <span
            key={index}
            className="genre">
            {genre}
          </span>
        );
      })}
    </div>
  );
};

Genres.propTypes = {
  genres: PropTypes.array,
};
export default Genres;
