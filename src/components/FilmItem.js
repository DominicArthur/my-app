import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

function FilmItem(props) {
    return (
        <div>
            <Link to={"/edit/" + props.myMovie._id} className='btn btn-primary'>Edit</Link>

            {/* Delete button */}
            <Button
                variant="danger"
                onClick={(i) => {
                    i.preventDefault();
                    axios.delete('http://localhost:4000/api/movie/' + props.myMovie._id)
                        .then(() => {
                        })
                        .catch((error) => {
                            console.error('Error deleting movie:', error);
                        });
                }}>Delete</Button>

            <Card>
                <Card.Header>{props.myMovie.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myMovie.thumbnail} alt={props.myMovie.title} />
                        <footer>
                            {props.myMovie.director}
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
}

export default FilmItem;
