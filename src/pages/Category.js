import React, { Component } from 'react';
import Navbar from '../components/Navbar/';
import Page from '../components/Page/';
import allPages from '../data/all-pages';

export default class Category extends Component {
    
    state = {
        category: null
    };
    
    componentDidMount(){
        const category = allPages.find((cat) => (
            cat.name.toLowerCase().replace(" ", "-") === this.props.match.params.category
        ));
        
        if(category){
            this.setState({category});
        }
        
    }


    render(){
        const { category } = this.state || {};
        if(!category){
            return null;
        } 
        return (
            <div>
                <Navbar title={category.name} />
                <div className={'category-wrapper'}>
                {   category.pages.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0)).map( (page, i) => (
                        <Page data={page} key={page.url} position={i} />
                    ))
                }
                </div>
            </div>
        );
    }
}