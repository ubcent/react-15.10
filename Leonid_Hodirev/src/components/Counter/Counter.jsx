import React, {Component, Fragment} from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 1,
        }
    }

    handleClick = (e) => {
        const addittion = event.target.name === 'minus' ? -1 : 1;
        this.setState((prevState) => ({
            ...prevState,
            counter: prevState.counter + addittion,
        }));
    };

    render() {
        const {counter} = this.state;

        return (
            <Fragment>
                <button name="minus" onClick={this.handleClick}>-</button>
                {counter}
                <button name="plus" onClick={this.handleClick}>+</button>
            </Fragment>
        )
    }
}