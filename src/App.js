/** @format */

import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home'
import FullArticle from './Components/FullArticle';
import Comments from './Components/Comments';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/article/:article_id' element={<FullArticle />} />
				<Route path='/article/:article_id/comments' element={<Comments/>} />
			</Routes>
		</div>
	);
}

export default App;
