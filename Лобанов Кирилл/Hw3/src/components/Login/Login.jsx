import React, {Component, Fragment} from 'react';
import './Login.css'
import Button from "react-bootstrap/es/Button";
import Fade from "react-bootstrap/es/Fade";
import Well from "react-bootstrap/es/Well";

export default class Login extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false
        };
    }

    render() {
        return (
            <Fragment>
                <div>
                    <Button onClick={() => this.setState({open: !this.state.open})}>
                        Login
                    </Button>
                    <Fade in={this.state.open}>
                        <div>
                            <Well>
                                <form>
                                    <div className="form-group">
                                        <label className="text" htmlFor="exampleDropdownFormEmail2">Email
                                            address</label>
                                        <input type="email" className="form-control" id="exampleDropdownFormEmail2"
                                               placeholder="email@example.com"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="text" htmlFor="exampleDropdownFormPassword2">Password</label>
                                        <input type="password" className="form-control"
                                               id="exampleDropdownFormPassword2"
                                               placeholder="Password"/>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="dropdownCheck2"/>
                                        <label className="form-check-label text" htmlFor="dropdownCheck2">
                                            Remember me
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Sign in</button>
                                </form>
                            </Well>
                        </div>
                    </Fade>
                </div>
            </Fragment>
        )
    }
}