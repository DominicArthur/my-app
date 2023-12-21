import Movie from "./Movie";
import React from "react";

function view() {

    const data = [
        {
            "title": "The Lord of the Rings: Fellowship of the Ring",
            "director": ["Peter Jackson"],
            "filmLenght": "2 hours and 58 minutes",
            "thumbnail":"C:\Users\Minei\OneDrive - Atlantic TU\Year 3\DATA REPRESENTATION AND QUERYING\DR-Project\my-app\src\images\OIP.jpg",
            "categories": []
         },
         {
            "title": "Fantastic Mr. Fox",
            "director": ["Wes Anderson"],
            "filmLenght": "1 hour and 27 minutes",
            "thumbnail": "C:\Users\Minei\OneDrive - Atlantic TU\Year 3\DATA REPRESENTATION AND QUERYING\DR-Project\my-app\src\images\jAFvXFcup7pQOyofJlxPr6rcFaa.jpg",
            "categories": []
         },
         {
            "title": "Jujutsu Kaisen 0",
            "director": ["Sunghoo Park"],
            "filmLenght": "1 hour and 52minutes",
            "thumbnail":"C:\Users\Minei\OneDrive - Atlantic TU\Year 3\DATA REPRESENTATION AND QUERYING\DR-Project\my-app\src\images\OIP (1).jpg",
         } 
    ];

    return(
        <div>
            <h2>Movie Page</h2>
            <Movie myMovies={data}></Movie>
        </div>
    );
}

export default view;