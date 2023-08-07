import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import noPoster from '../image/no-poster.png';
import '../style/showDetails.scss';
import dayjs from 'dayjs';
import Genres from '../components/Genres';
import CircleRating from '../components/CircleRating';

const ShowDetails = () => {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const fetchShow = async () => {
        const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShow(data);
      };
      fetchShow();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
  };
  const bookTicketHandel = () => {
    console.log('boking');
    navigate('/booking', { state: show });
  };

  return (
    <div className="show_details">
      <div className="left">
        <img
          src={show?.image?.original || noPoster}
          alt={show?.name}
        />
      </div>
      <div className="right">
        <div className="header">
          <h1>{show?.name}</h1>
          <span>{dayjs(show?.premiered).format('MMM D, YYYY')}</span>
        </div>
        {show?.genres && <Genres genres={show?.genres} />}
        <div className="row">
          {show?.rating?.average && <CircleRating rating={show?.rating} />}
          <button
            onClick={bookTicketHandel}
            className="book-ticket-btn">
            Book Ticket
          </button>
        </div>
        <div className="summary">
          <h2>Summary</h2>
          <p>{show?.summary}</p>
        </div>
        <div className="showInfo">
          <div className="show-language">
            <span className="text-bold">Language:</span>
            <p className="text">{show?.language}</p>
          </div>
          <div className="show-status">
            <span className="text-bold">Status:</span>
            <p className="text">{show?.status}</p>
          </div>
          <div className="show-runtime">
            <span className="text-bold">Runtime:</span>
            <p className="text">{toHoursAndMinutes(show?.runtime)}</p>
          </div>
        </div>
        <div className="showMoreInfo">
          <span className="text-bold">Official Site:</span>
          <p>
            <Link to={show?.officialSite}> Official Site Link</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
