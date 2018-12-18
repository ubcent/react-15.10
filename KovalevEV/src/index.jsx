import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Layout from './components/Layout';

class App extends Component {
    render() {
        return (
         <Layout />
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'));;