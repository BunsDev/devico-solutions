/* eslint-disable no-undef */
export function trackEvent(action, data){
    if(mixpanel && window.__mmMetametrics && mixpanel.track){
        const category = action.category
        delete action.category
        mixpanel.track(
            category,
            {...action, ...data},
        );
    }
}

const generateOpt = (category, action, name) => ({ category, action, name });

const NAMES = {
    PAGE: 'Page',
    FEATURED_PAGE: 'Featured Page',
	PAGE_CATEGORY: 'Page Category',
    HOMEPAGE_TAB: 'Homepage Tab',
};

const ACTIONS = {
	CLICK: 'Click',
	IMPRESSION: 'Impression',
};

const CATEGORIES = {
	BROWSER_HOME: 'Browser Home',
};

export const ANALYTICS_EVENT_OPTS = {
	CLICKS_PAGE: generateOpt(
		CATEGORIES.BROWSER_HOME,
		ACTIONS.CLICK,
		NAMES.PAGE
    ),
    CLICKS_FEATURED_PAGE: generateOpt(
		CATEGORIES.BROWSER_HOME,
		ACTIONS.CLICK,
		NAMES.FEATURED_PAGE
	),
	CLICKS_PAGE_CATEGORY: generateOpt(
		CATEGORIES.BROWSER_HOME,
		ACTIONS.CLICK,
		NAMES.PAGE_CATEGORY
	),
	CLICKS_HOMEPAGE_TAB: generateOpt(
		CATEGORIES.BROWSER_HOME,
		ACTIONS.CLICK,
		NAMES.HOMEPAGE_TAB
    ),
    IMPRESSION: generateOpt(
		CATEGORIES.BROWSER_HOME,
		ACTIONS.IMPRESSION,
	),
};

export default {trackEvent,ANALYTICS_EVENT_OPTS }
