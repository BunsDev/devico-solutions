import React, { Component } from 'react'
import VotedPage from './VotedPage';
import votedPages from '../../data/voted-pages';

import './index.css';


export default class VotedPagesCarousel extends Component {
    render(){
        return (
            <div className={'voted-pages'}>
                <h2 className={'voted-pages-title'}></h2>
                <div className={'voted-pages-carousel-wrapper'}>
                    <div className={'voted-pages-carousel'}>
                        { 
                            votedPages.map( (page, position) => (
                                <VotedPage 
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