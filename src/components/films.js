import FilmItem from "./FilmItem";

function Movies(props){

    return props.myMovies.map(
        (movie)=>{
            return <FilmItem myMovies={movie} key={movie._id}
            Reload={()=>{props.ReloadData();}}></FilmItem>
        }
    );
}

export default Movies;