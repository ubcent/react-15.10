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

//         <div className="card my-4">
//         <h5 className="card-header">Search</h5>
//     <div className="card-body">
//         <div className="input-group">
//             <input type="text" className="form-control" placeholder="Search for...">
//                                             <span className="input-group-btn">
//                                               <button className="btn btn-secondary" type="button">Go!</button>
//                                             </span>
//         </div>
//     </div>
// </div>
    );
};

export default Example;