import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostIndex from './containers/posts_index';
import PostsNew from './containers/posts_new';

export default (
	<Route path="/" component={ App }>
	  <IndexRoute component={PostIndex} />
	  <Route path="posts/new" component={ PostsNew } />
	</Route>
);

/*
<Route path="/" component={ App }>
	<Route path="books" component={ books }>
		<Route path="school" component={ school }>
		<Route path="college" component={ college }>
		<Route path="hs" component={ hs }>
	</Route>

	<Route path="magazine" component={ magazine } />

	<Route path="comix" component={ comix } />
	</Route>
*/