import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/rating.scss';

const Rating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="rating">
      {[...Array(totalStars)].map((star, index) => {
        const starRating = index + 1;
        return (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={starRating <= rating ? 'star filled' : 'star'}
          />
        );
      })}
    </div>
  );
};

export default Rating;
