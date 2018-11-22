import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {Link} from 'react-router-dom';

const Example = (props) => {
    return (
        <Card className="mb-4">
            <CardImg top width="100%" src="http://placehold.it/750x300" alt="Card image cap"/>
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardText>{props.body}</CardText>
                <Link to={`/post/${props.id}`}>Подробнее</Link>
            </CardBody>
        </Card>
    );
};

export default Example;