import React, { Component } from 'react'
import closeIcon from '../../images/close-icon.svg';
import{trackEvent, ANALYTICS_EVENT_OPTS} from '../../util/analytics';
import './index.css';

export default class Page extends Component {

    track = (e) => {
        e.preventDefault();
        trackEvent(ANALYTICS_EVENT_OPTS.CLICKS_PAGE, { 
            'Page' : this.props.data.name,
            'Url': this.props.data.url,
            'Position': this.props.position + 1
        });
        window.location.href = this.props.data.url;
    }

    renderDescription = (description) => {
        return description && (<p className={'page-desc'} >{description}</p>)
    }

    onClose = (e) => {
        e.preventDefault();
        this.props.onClose(this.props.data.url);
    }
    

    render(){
        const { size, closable, data: { name, description, url, icon }} = this.props;
        return (
            <a
                className={'page'}
                href={url}
                onClick={this.track}
            >
                <img 
                    src={icon} 
                    className={`page-logo ${size === 'small' ? 'page-logo-small':''}`}
                    alt={`${name} logo`}
                />
                <div className='page-content'>
                    <p className={`page-name ${size === 'small' ? 'page-name-small':''}`} >{name}</p>
                    { description ? this.renderDescription(description) : null}
                    <span className={'page-url'} >{url}</span>
                </div>
                { closable && (
                        <button 
                            className={'page-close'}
                            onClick={this.onClose}
                        >
                            <img src={closeIcon} alt={'close button'} />
                        </button>
                    )
                }
            </a>
            );
    }
}