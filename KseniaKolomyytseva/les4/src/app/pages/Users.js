import React, { Component } from 'react';
import axios from 'axios';

import PageTitle from '../components/PageTitle';
import User from '../components/User';
import Preloader from '../components/Preloader';

export default class Users extends Component {
    constructor() {
        super( ...arguments );

        this.state = {
            users: []
        };

        axios.get( 'https://jsonplaceholder.typicode.com/users' )
            .then( ( response ) => {
                const { data } = response;
                this.setState( {
                    users: data
                } );
            } );
    }

    render() {
        const usersList = this.state.users.map( ( value ) => {
            return (
                <User data={ value } key={ value.id }/>
            );
        } );

        return (
            <div>
                <PageTitle title={'Пользователи'} description={'Читатели нашего блога'}/>
                <section id="content">
                    <div className="content-wrap">
                        <div className="container clearfix">
                            <div className="row">
                                <Preloader show={ !this.state.users.length }/>
                                { usersList }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}