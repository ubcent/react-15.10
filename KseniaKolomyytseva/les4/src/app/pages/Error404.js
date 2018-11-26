import React, { Component } from 'react';

import PageTitle from '../components/PageTitle';

export default class Error404 extends Component {
    render() {
        return (
            <div>
                <PageTitle title={'Страница не найдена'} description={'Ошибка 404'}/>
                <section id="content">
                    <div className="content-wrap">
                        <div className="container clearfix">
                            <h1>Страница не найдена</h1>
                            <p>Ошибка 404</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}