import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBh24w2uLNauhYn7JhPzvOPfGfYK2AB2f0';

// create new component. This component should produce some HTML
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// Take this component's generated code and put it in page
ReactDOM.render(<App />, document.querySelector('.container'));