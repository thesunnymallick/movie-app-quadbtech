import { Link } from 'react-router-dom';
import '../style/home.scss';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Genres from './Genres';
import CircleRating from './CircleRating';
import noPoster from '../image/no-poster.png';
const MovieCard = ({ id, name, image, genres, date, rating }) => {
  return (
    <div className="movieCard">
      <div className="posterBlock">
        <img
          src={image?.original || noPoster}
          alt={name}
        />
        <CircleRating rating={rating} />
        <Genres genres={genres} />
      </div>
      <div className="textBlock">
        <span className="title">{name}</span>
        <span className="date">{dayjs(date).format('MMM D, YYYY')}</span>
        <Link
          to={`/showDetails/${id}`}
          className="details-btn">
          Show details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.object,
  genres: PropTypes.array,
  date: PropTypes.string,
  rating: PropTypes.object,
};
