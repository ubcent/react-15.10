import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
} from 'reactstrap';

export default class Categories extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        item: PropTypes.string.isRequired,
      })
    )
  };

  render() {
    const {items, title} = this.props;
    return (
        <div>
          <Card className="pb-3 mb-3">
            <CardHeader tag="h5">{title}</CardHeader>
            {items.map((item =>
              <a key={item.id} className="mt-2 ml-3" href="#">{item.item}</a>))}
          </Card>
        </div>
    )
  }
}

