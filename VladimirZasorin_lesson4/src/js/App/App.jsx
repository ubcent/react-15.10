import React, { Component } from 'react';
import ArticleList from './ArticleList';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.articles = [
            {
                "id": "werfre",
                "user": 'werfwreewrcwe',
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas ex id ullamcorper consequat. Ut sem ante, interdum in quam eu, finibus posuere odio. In id euismod orci, nec placerat lacus. Nam massa ipsum, luctus vel vehicula in, varius nec libero. Maecenas odio dolor, dapibus vel eleifend semper, cursus ut dui. Nulla facilisi."
            }, 
            {
                "id": "wregetger",
                "user": 'werfwt5ywreewrcwe',
                "text": "tiam sagittis quam vulputate tortor dignissim, quis imperdiet lectus tincidunt. Pellentesque consequat orci porttitor diam hendrerit, sed viverra justo vestibulum. Vivamus pharetra maximus elit, quis posuere neque sodales quis. Vestibulum eget nibh nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In interdum ipsum quis porta scelerisque. Fusce at accumsan metus, quis sodales leo. Sed enim eros, malesuada in aliquam ac, ultrices in enim. Suspendisse bibendum ligula non lobortis tincidunt."
            }, 
            {
                "id": "werwewerfyrhhfre",
                "user": 'werfcsfwreewrcwe',
                "text": "Fusce sed imperdiet ex, ut mollis nisi. Integer lorem nisi, vestibulum congue felis eget, commodo viverra mauris. Donec ullamcorper placerat ex, quis rutrum est commodo dapibus. Integer vitae feugiat sapien, non pharetra nisi. Aenean facilisis gravida pharetra. Nunc euismod lorem eget eros viverra efficitur. Phasellus egestas ultricies semper. Aenean turpis massa, laoreet in tellus nec, vulputate vulputate leo. Morbi eget mauris ac turpis euismod interdum."
            },  
            {
                "id": "wefre",
                "user": 'werfc',
                "text": "Maecenas posuere posuere sollicitudin. In ultrices luctus ipsum, in tincidunt eros fringilla eu. Praesent maximus lorem in fringilla vehicula. Praesent imperdiet dolor urna, ac scelerisque dolor bibendum porttitor. Curabitur at augue eu quam tempus blandit. Nam sagittis laoreet elit laoreet pellentesque."
            }
        ];
    }
    render() {
        return (
            <div className="container">
                <Nav/>
                <div className="jumbotron">
                    <h2 className="display-3">App name</h2>
                </div>
                <ArticleList>{ this.articles }</ArticleList>
            </div>
        )
    }
}