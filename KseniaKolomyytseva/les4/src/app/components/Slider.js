import React, { Component } from 'react';

export default class Slider extends Component {
    render() {
        let itemSlider = this.props.item.map( ( item, index ) => {
            return (
                <div className="slide" key={index}>
                    <img className="image_fade" src={item.src} alt={item.alt}/>
                </div>
            );
        } );

        return (
            <div className="fslider" data-arrows="false" data-lightbox="gallery">
                <div className="flexslider">
                    <div className="slider-wrap">
                        {itemSlider}
                    </div>
                </div>
            </div>
        );
    }
}