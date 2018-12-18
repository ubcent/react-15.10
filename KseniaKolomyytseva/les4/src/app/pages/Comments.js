import React, { Component } from 'react';

import PageTitle from '../components/PageTitle';

export default class Comments extends Component {
    render() {
        return (
            <div>
                <PageTitle title={'Комментарии'} description={'Комментарии читателей блога'}/>
                <section id="content">
                    <div className="content-wrap">
                        <div className="container clearfix">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam, aspernatur assumenda culpa deleniti dicta dignissimos dolore ducimus eos ipsam laudantium maxime nisi omnis quidem sapiente sit totam vero vitae?</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}