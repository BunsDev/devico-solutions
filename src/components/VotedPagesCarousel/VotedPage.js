import React, { Component } from 'react'
import './VotedPage.css';
import{trackEvent, ANALYTICS_EVENT_OPTS} from '../../util/analytics';

export default class VotedPage extends Component {

    track = (e) => {
        trackEvent(ANALYTICS_EVENT_OPTS.CLICKS_VOTED_DAPP, { 
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
                className={'voted-page'}
                href={url}
                onClick={this.track}
            >
                <span className={'voted-page-box'}>
                    <img 
                        src={icon} 
                        className={'voted-page-logo'}
                        alt={`${shortName} logo`}
                    />
                </span>
                <p className={'voted-page-name'} >{shortName}</p>
                <p className = {'voted-page-descripton'}> </p>
            </a>
            );
    }
}