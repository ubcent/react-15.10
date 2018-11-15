import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Auth extends React.Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Введите почту" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Пароль</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Введите пароль" />
                </FormGroup>
                <Button>Отправить</Button>
            </Form>
        );
    }
}