import './ContentAbout.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class ContentAbout extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="ContentAbout">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque condimentum tellus, eget congue
          diam semper quis. Nulla efficitur luctus imperdiet. Donec non felis vel tortor luctus tempor. Aenean id magna
          placerat, imperdiet ante et, tempor purus. Fusce laoreet pharetra quam ut vehicula. Nullam non mattis mi,
          commodo lacinia libero. Sed ac efficitur magna. Nulla lacinia consequat magna.</p>

        <p>Donec vitae leo aliquam, condimentum orci eget, gravida mi. Integer aliquam in ligula nec pulvinar.
           Maecenas dictum blandit nibh, eu sodales ex aliquam vitae. Maecenas porta erat sapien, et ultricies enim
            eleifend cursus. Praesent at venenatis ligula. Suspendisse nunc mi, laoreet sit amet lectus finibus, semper
             ullamcorper purus. Donec pellentesque risus non augue pellentesque luctus. Vestibulum tristique hendrerit
              arcu, sit amet scelerisque nunc fermentum quis. Nullam et quam ultricies, varius quam et, euismod arcu.
              Duis molestie accumsan lectus ac eleifend. Nam blandit dictum turpis, eget luctus dolor tristique nec.
               Vestibulum volutpat orci at eros imperdiet eleifend. Ut viverra elit volutpat nisl mollis accumsan.
               Vivamus porttitor in enim vitae porta.</p>
      </div>
    )
  }
}