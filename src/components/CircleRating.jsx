import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const CircleRating = ({ rating }) => {
  return (
    <>
      {rating.average != null ? (
        <div className="circleRating">
          <CircularProgressbar
            value={rating?.average}
            maxValue={10}
            text={rating?.average}
            styles={buildStyles({
              pathColor: rating?.average < 5 ? 'red' : rating?.average < 7 ? 'orange' : 'green',
            })}
          />
        </div>
      ) : (
        ''
      )}
    </>
  );
};

CircleRating.propTypes = {
  rating: PropTypes.object,
};

export default CircleRating;
