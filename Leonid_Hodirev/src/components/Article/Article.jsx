import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Example = (props) => {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">{props.head}</h1>
                <p className="lead">{props.lead}</p>
                <hr className="my-2" />
                <p>{props.text}</p>
            </Jumbotron>
        </div>
    );
};

export default Example;