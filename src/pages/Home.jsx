import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import '../style/home.scss';

const Home = () => {
  const [data, setdata] = useState([]);
  const fetchMovieData = async () => {
    try {
      const { data } = await axios.get('https://api.tvmaze.com/search/shows?q=all');

      setdata(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovieData();
  }, []);

  return (
    <div className="allMovies">
      {data.map((item) => {
        const { id, name, image, genres, premiered, rating } = item.show;
        return (
          <MovieCard
            key={id}
            name={name}
            image={image}
            genres={genres}
            rating={rating}
            date={premiered}
            id={id}
          />
        );
      })}
    </div>
  );
};

export default Home;
