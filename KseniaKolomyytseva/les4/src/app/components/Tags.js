import React, { Component } from 'react';

import TagsItem from './TagsItem';

export default class Tags extends Component {
    render() {
        let itemsTags = this.props.items.map( ( item ) => {
            return (
                <TagsItem name={item.name} href={item.href} key={item.id}/>
            );
        } );

        return (
            <div className="tagcloud">
                {itemsTags}
            </div>
        );
    }
}