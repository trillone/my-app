import React from 'react';
import PropTypes from 'prop-types'; // 받은 데이터의 유효성(타입)을 검사하기 위함
import './Movies.css';
import { Link } from "react-router-dom";

function Movie({ title,year,summary,poster, genres}){
    return (
        <div className="movie">
            <Link
            to={"/movie-detail"} // Link를 누르면 detail로 넘어가면서 해당 state값을 넘겨준다
            state={{year,title,summary,poster,genres}}
            >
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre,index)=>{
                        return <li key={index}className="movie__genre">{genre}</li>;
                    })}
                </ul>
                <p className="movie__summary">{summary.slice(0,180)}</p>
            </div>
            </Link>
        </div>
    );
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;