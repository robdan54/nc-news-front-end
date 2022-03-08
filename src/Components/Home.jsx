/** @format */

import { ListGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import * as articlesApi from '../utils/articlesApi';

import ArticleCard from './ArticleCard';

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		articlesApi.fetchArticles().then((articlesFromApi) => {
			console.log(articlesFromApi);
			setArticles(articlesFromApi);
			setIsLoading(false);
		});
	}, []);

	return !isLoading ? (
		<ListGroup variant='flush' as='ol' numbered>
			{articles.map((article) => {
                return <ArticleCard article={article}/> 
			})}
		</ListGroup>
	) : (
		<h3>Loading...</h3>
	);
}
