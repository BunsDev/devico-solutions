import React, { Component } from 'react'
import PageCategory from './PageCategory';
import allPages from '../../data/all-pages';
import './index.css';

export default class ExplorePages extends Component {
    render(){
        return (
            <div className={'explore-pages'}> 
                { 
                    allPages.map( (page) => (
                        <PageCategory 
                            data={page}
                            key={page.name}
                        />
                    ))
                }
            </div>
        );
    }
}