var m_name = document.getElementById("movie_title");
var m_year = document.getElementById("movie_year");
var m_genre = document.getElementById("movie_genre");

function movie_info(title, year, genre) {
  this.title = title;
  this.year = year;
  this.genre = genre;
}

function movie_block(movie) {
  m_name.innerText = movie.title;
  m_year.innerText = movie.year;
  m_genre.innerText = movie.genre;
}

function movie_info1() {
  var movie1 = new movie_info("어벤져스", "2012.04.26.", "액션 미국 142분");
  movie_block(movie1);
}

function movie_info2() {
  var movie2 = new movie_info("아이언맨", "2008.04.30.", "SF 미국 125분");
  movie_block(movie2);
}

function movie_info3() {
  var movie3 = new movie_info("블랙팬서", "2018.02.14.", "액션 미국 135분");
  movie_block(movie3);
}
