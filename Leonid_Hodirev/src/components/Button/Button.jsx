import React from 'react';
import { Button } from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Button color={this.props.color} href="/">{this.props.title}</Button>
            </div>
        );
    }
}