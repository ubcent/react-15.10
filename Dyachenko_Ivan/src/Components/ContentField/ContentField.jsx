import React, {Component} from 'react';
import './ContentField.css';

export default class ContentField extends Component {
  render() {
    const {items} = this.props;
    return(
      <div className='contentfield'>
        {items.map((item) => <div className='content_item'>{item.title}</div>)}
        
      </div>
    )
  }
}