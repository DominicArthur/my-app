import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

function FilmItem(props){

    useEffect(() => {
        console.log("filmitem "+ props.myMovie);
    }, []);

    return(
        <div>
            <Card>
                <Card.Header>{props.myMovie.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src ={props.myMovie.thumbnail}></img>
                        <footer>
                            {props.myMovie.director[0]}
                        </footer>
                    </blockquote>
                </Card.Body>
             </Card>
        </div>
    );
}

export default FilmItem;