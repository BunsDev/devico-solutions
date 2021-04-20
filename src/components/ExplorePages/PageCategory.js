import React, { Component } from 'react'
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{trackEvent, ANALYTICS_EVENT_OPTS} from '../../util/analytics';

import './PageCategory.css';

export default class PageCategory extends Component {
    track = () => {
        trackEvent(ANALYTICS_EVENT_OPTS.CLICKS_DAPP_CATEGORY, { 
            'Category' : this.props.data.name,
        });
    }

    render(){
        const { name, icon, color } = this.props.data;
        const url = `/${name.toLowerCase().replace(" ", "-")}`;
        return (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <Link
                className={'page-category-container'}
                to={url}
                onClick={this.track}
            >
                < div className={'page-category'} >
                    <FontAwesomeIcon
                        className={'page-category-icon'}    
                        icon={icon}
                        color={color}
                    />
                    < span className={'page-category-name'} >{name}</span>
                </div>
            </Link>
        );
    }
}