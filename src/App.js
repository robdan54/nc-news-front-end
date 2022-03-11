/** @format */

import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import FullArticle from './Components/FullArticle';
import Comments from './Components/Comments';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { UserContext } from './Contexts/UserContext';

function App() {
	const [loggedUser, setLoggedUser] = useState('tickle122'); //Set as a default user for now

	return (
		<UserContext.Provider value={{ loggedUser, setLoggedUser }}>
			<div className='App'>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/article/:article_id' element={<FullArticle />} />
					<Route path='/article/:article_id/comments' element={<Comments />} />
				</Routes>
			</div>
		</UserContext.Provider>
	);
}

export default App;
