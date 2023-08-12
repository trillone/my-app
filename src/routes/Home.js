import React from "react";
import axios from 'axios';
import Movie from '../components/Movies';
import './Home.css';

class Home extends React.Component {
  state = { // 최초의 state
    isLoading: true,
    movies: [],
  };

  getMovies= async ()=>{ // async와 await는 getMovies() 함수는 시간이 필요하다는 것을 알리기 위해 사용
    const {data:{ // 구조분해할당
      data:{
        movies
      }
    }} = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({movies, isLoading: false}); // console 창에서 movies에 관련된 데이터만 추출해서 볼 수 있다
    // js에서는 객체의 키와 대입할 변수의 이름이 같으면 코드를 축약할 수 있다 - movies:movies 대신 movies
    // 영화 데이터를 받았으니까 isLoading을 false로 바꿔줘야한다
  }

  componentDidMount(){ // App이 mount되면 실행되는 함수
    this.getMovies();
  }

  render(){ // 리액트 앱이 실행되면 실행되는 함수
    const { isLoading, movies } = this.state;  // 구조분해할당
    return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader_text">"Loading..."</span>
          </div>
      ) : (
        <div className="movies">
          { movies.map((movie)=>{
            return (
            <Movie
            key={movie.id} 
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            genres={movie.genres}
            />
            );
      })}
    </div>
    )
  }
  </section>
    );
}
}

export default Home;