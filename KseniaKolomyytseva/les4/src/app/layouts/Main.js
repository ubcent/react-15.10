import React, { Component } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';

export default class Main extends Component {
    constructor() {
        super( ...arguments );

        this.state = {
            logo: {
                standard: '/images/logo.png',
                retina: '/images/logo@2x.png',
                alt: 'Блог'
            },

            menuJson: '../data/menu.json',

            menu: []
        };

        axios.get( this.state.menuJson )
            .then( ( response ) => {
                const { data } = response;

                const menuItems = data.map( ( item, index ) => {
                    return (
                        <MenuItem href={ item.href } key={ index }>{ item.name }</MenuItem>
                    );
                } );

                this.setState( {
                    menu: menuItems
                } );
            } );
    } 

    render() {
        return (
            <div id="wrapper" className="clearfix">
                <Header>
                    <Logo srcLogoStandard={ this.state.logo.standard }
                          srcLogoRetina={ this.state.logo.retina } alt={ this.state.logo.alt }/>
                    <Menu>
                        { this.state.menu }
                    </Menu>
                </Header>

                { this.props.children }

                <Footer/>
            </div>
        );
    }
}