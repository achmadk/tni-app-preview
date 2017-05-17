import React from 'react';
import {render} from 'react-dom';
import {List, Map} from 'immutable';
import {AppContainer} from 'react-hot-loader';

import initRouter from './modules/router';
import {isAndroid} from './modules/utils/if-android'

import SampleComponent from './components/sample-component'

import 'framework7'

require.ensure([], require => {
	if (process.env.MOBILE_PLATFORM !== "ios") {
		require.ensure([], require => {
			require("framework7/dist/css/framework7.material.min.css");
			require("framework7/dist/css/framework7.material.colors.min.css");
		}, "style.material")
	} else {
		require.ensure([], require => {
			require("framework7/dist/css/framework7.ios.min.css");
			require("framework7/dist/css/framework7.ios.colors.min.css");
		}, "style.ios")
	}
	require('./assets/css-preprocessors/app.less');
	require('ionicons/dist/scss/ionicons.scss');
}, "styles")

const todos = List.of(
	Map({id: 1, text: 'React', status: 'active', editing: false }),
	Map({id: 2, text: 'Redux', status: 'active', editing: false}),
	Map({id: 3, text: 'Immutable', status: 'completed', editing: false}),
	Map({id: 4, text: 'Webpack', status: 'completed', editing: false}),
	Map({id: 5, text: 'Inferno', status: 'completed', editing: false})
);

initRouter();

// export var F7 = new Framework7({
export var f7 = new Framework7({
    modalTitle: 'awesome app',
    material: isAndroid(),
    animateNavBackIcon: true,
    pushState: true,
    scrollTopOnStatusbarClick: true,
    uniqueHistoryIgnoreGetParameters: true,
    allowDuplicateUrls: true
})

window.f7 = f7

export var main = f7.addView('.view-main', {
		dynamicNavbar: !isAndroid()
})

window.main = main

render(
	<AppContainer>
		<SampleComponent todos={todos} />
	</AppContainer>,
	document.getElementById('sample-id')
);

if (module.hot) {
	module.hot.accept('./components/sample-component', () => {
		let NextSampleComponent = require('./components/sample-component').default
		render(
			<AppContainer>
				<NextSampleComponent todos={todos} />
			</AppContainer>,
			document.getElementById('sample-id')
		);
	});
}
