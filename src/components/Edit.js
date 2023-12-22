import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit(props){
    let { id } = useParams();

    const [title, setTitle] = useState("");
    const [poster, setPoster] = useState("");
    const [director, setDirector] = useState("");

    const navigate = useNavigate();

    useEffect(()=> {   // cmd cannot see server.js causing connection issues (screenshot of issue in wiki)
        axios.get('http://localhost:4000/api/movie/' + id)
        .then((response) => {
            setTitle(response.data.title);
            setPoster(response.data.poster);
            setDirector(response.data.director);
        })
        .catch(function (error){
            console.log(error);
        })
    }, []);
    const handleSubmit = (event) =>{
        event.preventDefault();
        const newMovie = {
            id: id,
            title:title,
            poster: poster,
            director: director
        };

        axios.put('http://localhost:4000/api/movie/' + id, newMovie)
            .then((response) => {
                console.log(response.data);
                navigate('/movie')
            });
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="my-form-group">
                    <label>Movie Title: </label>
                <input type="text"
                    className="my-form-control"
                    value={title}
                    onChange={(i) => setTitle(i.target.value)}
                    />
                </div>
                <div className="my-form-group">
                    <label>Add Poster Ulr: </label>
                <input type="text"
                    className="my-form-control"
                    value={poster}
                    onChange={(i) => setPoster(i.target.value)}
                    />
                </div>
                <div className="my-form-group">
                    <label>Add Directors Name: </label>
                <input type="text"
                    className="my-form-control"
                    value={director}
                    onChange={(i) => setDirector(i.target.value)}
                    />
                </div>
                <div className="my-form-group">
                    <input type="submit" value="Edit Movie" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}