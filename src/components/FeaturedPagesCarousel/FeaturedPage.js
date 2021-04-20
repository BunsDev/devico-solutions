import React, { Component } from 'react'
import './FeaturedPage.css';
import{trackEvent, ANALYTICS_EVENT_OPTS} from '../../util/analytics';

export default class FeaturedPage extends Component {

    track = (e) => {
        trackEvent(ANALYTICS_EVENT_OPTS.CLICKS_FEATURED_DAPP, { 
            'Page' : this.props.data.shortName,
            'Url' : this.props.data.url,
            'Position': this.props.position + 1
        });
        window.location.href = this.props.data.url;
    }

    render(){
        // const { shortName, url, icon, description } = this.props.data;
        const { shortName, url, icon } = this.props.data;
        return (
            <a
                className={'featured-page'}
                href={url}
                onClick={this.track}
            >
                <span className={'featured-page-box'}>
                    <img 
                        src={icon} 
                        className={'featured-page-logo'}
                        alt={`${shortName} logo`}
                    />
                </span>
                <p className={'featured-page-name'} >{shortName}</p>
                <p className = {'featured-page-descripton'}> </p>
            </a>
            );
    }
}