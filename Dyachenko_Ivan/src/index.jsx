import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Menu from './Components/Menu';
import Container from './Components/Container';
import './style.css';
import ContentField from './Components/ContentField';
import Login from './Components/Login';


const items = [
    {href: '#', title: 'Home'},
    {href: '#', title: 'News'},
    {href: '#', title: 'Blog'},
    {href: '#', title: 'ContentItems'}
];

const contentItems = [
    {title: 'Some Content title...', contentText: 'Some Content Text', url: 'http://placehold.it/750x300'},
    {title: 'Some Content title...', contentText: 'Some Content Text', url: 'http://placehold.it/750x300'},
    {title: 'Some Content title...', contentText: 'Some Content Text', url: 'http://placehold.it/750x300'},
    {title: 'Some Content title...', contentText: 'Some Content Text', url: 'http://placehold.it/750x300'},
    {title: 'Some Content title...', contentText: 'Some Content Text', url: 'http://placehold.it/750x300'},
    {title: 'Some Content title...', contentText: 'Some Content Text', url: 'http://placehold.it/750x300'},
    {title: 'Some Content title...', contentText: 'Some Content Text', url: 'http://placehold.it/750x300'},
    {title: 'Some Content title...', contentText: 'Some Content Text', url: 'http://placehold.it/750x300'},
    {title: 'Some Content title...', contentText: 'Some Content Text', url: 'http://placehold.it/750x300'},
    {title: 'Some Content title...', contentText: 'Some Content Text', url: 'http://placehold.it/750x300'},
];

class App extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         isModal: false,
    //     }
    // }

    // contentToggle = (e) => {
    //     this.setState({
    //         isModal: true,
    //     })
    // }

    render() {
        // const {isModal} = this.state;
        return (
            <div>
                <h1>Dyachenko Ivan's HomeWork:</h1>
                <Login/>
                <Container>
                    <Menu items={items}/>
                    {/*{isModal && <ContentField items={contentItems}/>}*/}
                    <ContentField items={contentItems}/>
                </Container>
            </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('root'));