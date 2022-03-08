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
			setArticles(articlesFromApi);
			setIsLoading(false);
		});
	}, []);

	return !isLoading ? (
		<ListGroup variant='flush'>
			{articles.map((article) => {
                return <ArticleCard article={article} key={article.article_id + 'card'}/> 
			})}
		</ListGroup>
	) : (
		<h3>Loading...</h3>
	);
}
