import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Layout from './components/Layout';

class App extends Component {
    render() {
        return (
           /* <div className="info">
                <Container>
                    <Menu items={items} title = "Main menu" />
                    Hello, buddy!
                    <Menu items={items1} />
                    <Button color="danger">Danger!</Button>
                </Container>
            </div>*/
           <Layout />
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'));;