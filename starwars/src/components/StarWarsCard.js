import React from "react";
import { Card, CardBody, CardText, CardGroup } from "reactstrap";

function StarWarsCard(props) {
    console.log(props)
    return (
        <div className="starwars">
        <Card className="starwars-card">
            <CardBody className="starwars-body">{props.character.name}
                <CardText>Gender: {props.character.gender}</CardText>
                <CardText>Eye Color: {props.character.eye_color}</CardText>
                <CardText>Hair Color: {props.character.hair_color}</CardText>
            </CardBody>
        </Card>
        </div>         
    );
};

export default StarWarsCard;