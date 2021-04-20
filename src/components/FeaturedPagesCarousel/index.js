import React, { Component } from 'react'
import FeaturedPage from './FeaturedPage';
import featuredPages from '../../data/featured-pages';

import './index.css';


export default class FeaturedPagesCarousel extends Component {
    render(){
        return (
            <div className={'featured-pages'}>
                {/*<h2 className={'featured-pages-title'}></h2>*/}
                <div className={'featured-pages-carousel-wrapper'}>
                    <div className={'featured-pages-carousel'}>
                        { 
                            featuredPages.map( (page, position) => (
                                <FeaturedPage 
                                    data={page}
                                    key={page.url}
                                    position={position}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}