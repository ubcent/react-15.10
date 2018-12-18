import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input,} from 'reactstrap';
import './MessageForm.css';

export default class MessageForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            author: '',
            text: '',
        };
    }

    handleChange = (e) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSend = (e) => {
        const {send} = this.props;

        send(this.state);

        this.setState({text: ''});
    };

    render() {
        const {author, text} = this.state;
        return (
            <Form className="MessageForm">
                <FormGroup>
                    <Label for="exampleName">Автор</Label>
                    <Input onChange={this.handleChange} type="text" name="author" id="exampleName"/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Сообщение</Label>
                    <Input onChange={this.handleChange} type="textarea" name="text" id="exampleText" value={text}/>
                </FormGroup>
                <Button onClick={this.handleSend}>Отправить</Button>
            </Form>
        )
    }
}