import React, { Component } from 'react';

import PageTitle from '../components/PageTitle';

export default class Index extends Component {
    render() {
        return (
            <div>
                <PageTitle title={'Главная'} description={'Первый сайт на ReactJS'}/>
                <section id="content">
                    <div className="content-wrap">
                        <div className="container clearfix">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid assumenda blanditiis consequuntur dolore eaque eligendi, eum ex incidunt natus neque non omnis perferendis placeat provident quos rem sit tempora!s</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}