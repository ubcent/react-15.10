import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Example = (props) => {
    return (
        <Card className="my-4">
            <h5 className="card-header">Search</h5>
            <CardBody>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..."/>
                    <span>
                    <Button className="btn-secondary">Go!</Button>
                </span>
                </div>
            </CardBody>
        </Card>
    );
};

export default Example;