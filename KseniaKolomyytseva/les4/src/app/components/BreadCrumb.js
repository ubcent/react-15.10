import React, { Component } from 'react';

export default class BreadCrumb extends Component {
    render() {
        let itemsBreadCrumb = this.props.items.map( ( item, index ) => {
            let li = <li key={index}><a href={item.href}>{item.name}</a></li>;
            if ( index === this.props.items.length - 1 ) {
                li = <li className="active" key={index}>{item.name}</li>;
            }
            return li;
        } );

        return (
            <ol className="breadcrumb">
                {itemsBreadCrumb}
            </ol>
        );
    }
}