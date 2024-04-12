import {useEffect} from "react";
import { connect, useDispatch } from "react-redux";

import { Movie, moviesLoading } from "../../reducers/movies";
import { RootState } from "../../store";
import { MovieCard } from "./MovieCard";
import { client } from "../../api/tmdb";
import { moviesLoaded } from "../../reducers/movies";

import styles from './Movies.module.scss';

interface MoviesProps {
  movies: Movie[];
  loading: boolean;

}

function Movies({ movies, loading }: MoviesProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadData() {
      dispatch(moviesLoading());
        
      const config = await client.getConfiguration();
      const imageUrl = config.images.base_url;
      const results = await client.getNowPlaying();

      const mappedResults: Movie[] = results.map((m) => ({
        id: m.id,
        title: m.title,
        overview: m.overview,
        popularity: m.popularity,
        image: m.backdrop_path ? `${imageUrl}w780${m.backdrop_path}` : undefined,
      }));

      dispatch(moviesLoaded(mappedResults));
    }

    loadData();
  }, [dispatch])

  return (
    <section>
      <div className={styles.list}>
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          movies.map((m) => (
          <MovieCard
            id={m.id}
            title={m.title}
            overview={m.overview}
            popularity={m.popularity}
            image={m.image}
          />
        ))
      )}
    </div>
  </section>
  );
}

const mapStateToProps = (state: RootState) => ({
  movies: state.movies.top,
  loading: state.movies.loading,
})

const connector = connect(mapStateToProps);

export default connector(Movies); 