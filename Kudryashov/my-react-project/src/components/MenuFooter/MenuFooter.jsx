import './MenuFooter.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class MenuFooter extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    )
  }

  static defaultProps = {
    items: []
  }

  render() {
    const { items } = this.props;
    return (
      <Fragment>
        <p className="rights">All rights reserved &#169;</p>
      </Fragment>
    )
  }
}