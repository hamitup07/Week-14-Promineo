import Stars from "./Stars";
import "../App.css";
import "./MovieList.css";
import Navbar from "./Navbar";
import ReviewForm from "./ReviewForm";

export const MovieList = () => {

    const data = [

    {
        "id": 1,
        "title": "The Wizard of Oz",
        "img": "https://m.media-amazon.com/images/M/MV5BNjUyMTc4MDExMV5BMl5BanBnXkFtZTgwNDg0NDIwMjE@._V1_SX300.jpg",
        "date": "1939",
        "synopsis": "",
      },
      {
        "id": 2,
        "title": "Citizen Kane",
        "img": "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "date": "1941",
        "synopsis": "",
      },
      {
        "id": 3,
        "title": "The Third Man",
        "img": "https://m.media-amazon.com/images/M/MV5BYjE2OTdhMWUtOGJlMy00ZDViLWIzZjgtYjZkZGZmMDZjYmEyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "date": "1949",
        "synopsis": "",
      },
      {
        "id": 4,
        "title": "It Happened One Night",
        "img": "https://www.filmsite.org/posters/ithappenedonenight.jpg",
        "date": "1934",
        "synopsis": "",
      },
      {
        "id": 5,
        "title": "Casablanca",
        "img": "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
        "date": "1942",
        "synopsis": "",
      },
      {
        "id": 6,
        "title": "All About Eve",
        "img": "https://m.media-amazon.com/images/M/MV5BMTY2MTAzODI5NV5BMl5BanBnXkFtZTgwMjM4NzQ0MjE@._V1_SX300.jpg",
        "date": "1950",
        "synopsis": "",
      },
      {
        "id": 7,
        "title": "Metropolis",
        "img": "https://m.media-amazon.com/images/M/MV5BMTg5YWIyMWUtZDY5My00Zjc1LTljOTctYmI0MWRmY2M2NmRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "date": "1927",
        "synopsis": "",
      },
      {
        "id": 8,
        "title": "Modern Times",
        "img": "https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "date": "1936",
        "synopsis": "",
      },
      {
        "id": 9,
        "title": "King Kong",
        "img": "https://m.media-amazon.com/images/M/MV5BZTY3YjYxZGQtMTM2YS00ZmYwLWFlM2QtOWFlMTU1NTAyZDQ2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg",
        "date": "1933",
        "synopsis": "",
      },
      {
        "id": 10,
        "title": "Singin' in the Rain",
        "img": "https://m.media-amazon.com/images/M/MV5BMWUyNjQ5MTAtNDJhYS00MWQ0LTk2ZTAtZmE4MWNlMjMwMzg3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
        "date": "1952",
        "synopsis": "",
      },
      {
        "id": 11,
        "title": "Psycho",
        "img": "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "date": "1960",
        "synopsis": "",
      },
      {
        "id": 12,
        "title": "Laura",
        "img": "https://m.media-amazon.com/images/M/MV5BYjkxOGM5OTktNTRmZi00MjhlLWE2MDktNzY3NjY3NmRjNDUyXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg",
        "date": "1944",
        "synopsis": "",
      },
      {
        "id": 13,
        "title": "The Adventures of Robin Hood",
        "img": "https://m.media-amazon.com/images/M/MV5BYjZjOTU3MTMtYTM5YS00YjZmLThmNmMtODcwOTM1NmRiMWM2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "date": "1938",
        "synopsis": "",
      },
      {
        "id": 14,
        "title": "Snow White and the Seven Dwarfs",
        "img": "https://m.media-amazon.com/images/M/MV5BMTQwMzE2Mzc4M15BMl5BanBnXkFtZTcwMTE4NTc1Nw@@._V1_SX300.jpg",
        "date": "1937",
        "synopsis": "",
      },
      {
        "id": 15,
        "title": "A Hard Day's Night",
        "img": "https://m.media-amazon.com/images/M/MV5BZjQyMGUwNzAtNTc2MC00Y2FjLThlM2ItZGRjNzM0OWVmZGYyXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "date": "1964",
        "synopsis": "",
      },
      {
        "id": 16,
        "title": "Repulsion",
        "img": "https://upload.wikimedia.org/wikipedia/en/8/89/Repulsion_%281965_film_poster%29.jpg",
        "date": "1965",
        "synopsis": "",
      },
      {
        "id": 17,
        "title": "North by Northwest",
        "img": "https://m.media-amazon.com/images/M/MV5BZDA3NDExMTUtMDlhOC00MmQ5LWExZGUtYmI1NGVlZWI4OWNiXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "date": "1959",
        "synopsis": "",
      },
      {
        "id": 18,
        "title": "Rear Window",
        "img": "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "date": "1954",
        "synopsis": "",
      },
      {
        "id": 19,
        "title": "The Philadelphia Story",
        "img": "https://m.media-amazon.com/images/M/MV5BYjQ4ZDA4NGMtMTkwYi00NThiLThhZDUtZTEzNTAxOWYyY2E4XkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_SX300.jpg",
        "date": "1940",
        "synopsis": "",
      },
      {
        "id": 20,
        "title": "Touch of Evil",
        "img": "https://m.media-amazon.com/images/M/MV5BOTA1MjA3M2EtMmJjZS00OWViLTkwMTEtM2E5ZDk0NTAyNGJiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "date": "1958",
        "synopsis": "",
      },

];

return (


    <div className="MovieList">

        <Navbar />
        
        {/* Heading: */}
        <div class="container-fluid col-md-4 mx-auto text-center my-2">
            <div class="heading">Golden Age Films</div>
        </div>

        {/* Actual list of movies: */}
        {data.map((movie) => 
                
            <ul> 
                <div class="container-fluid col-md-5 mx-auto text-center my-2 py-2"> 
                    <div class="movieBox">
                
                        <img src={movie.img} /> <br></br>
                        <div class="heading2">{movie.title}</div>
                        <div class="heading3">{movie.date}</div> 
                        {<div class="container card col-md-4 my-1 border border-dark"> <Stars /> </div>} 
                    
                    {/* Review form per movie: */}
                        <div class="container-fluid col-lg mx-auto text-center">
                            <h5 className="heading4">Leave a review here:</h5>
                        <ReviewForm />
                        </div>

                    </div>
                </div>
            </ul>
            )
            }
    
    </div>
)

}


export default MovieList;