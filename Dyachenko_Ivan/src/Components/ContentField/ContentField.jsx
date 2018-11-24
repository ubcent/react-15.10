import React, {Component} from 'react';
import './ContentField.css';

export default class ContentField extends Component {
    render() {
        const {items} = this.props;
        return (
            <div className='contentfield'>
                {items.map((item, idx) => <div key={idx} className='content_item'><img src={item.url}/>
                    <h3>{item.title}</h3>{'\n'}<p>{item.contentText}</p></div>)}

            </div>
        )
    }
}