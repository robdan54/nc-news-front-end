/** @format */

import { ListGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import * as articlesApi from '../utils/articlesApi';

import ArticleCard from './ArticleCard';
import { fetchTopics } from '../utils/topicsApi';

export default function Home() {
	const [topics, setTopics] = useState([]);
	const [filter, setFilter] = useState(undefined);
	const [isLoading, setIsLoading] = useState(true);
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		fetchTopics().then((topicsFromApi) => {
			setTopics(topicsFromApi.map((topicFromApi) => topicFromApi.slug))
			setIsLoading(false)
		})
	},[]);

	useEffect(() => {
		setIsLoading(true);
		articlesApi.fetchArticles(filter).then((articlesFromApi) => {
			setArticles(articlesFromApi);
			setIsLoading(false);
		});
	}, [filter]);

	return !isLoading ? (
		<div className='mb-2 articleList'>
			<DropdownButton id='filter' title={filter || 'Filter' } variant='dark' style={{alignSelf:'start'}}>
				{topics.map((topic) => {
					return <Dropdown.Item key={topic} onClick={() => setFilter(topic)}>{ topic }</Dropdown.Item>;
				})}
				<Dropdown.Item key='reset' onClick={() => setFilter(undefined)}>Reset</Dropdown.Item>
			</DropdownButton>
			<ListGroup variant='flush'>
				{articles.map((article) => {
					return (
						<ArticleCard article={article} key={article.article_id + 'card'} />
					);
				})}
			</ListGroup>
		</div>
	) : (
		<h3>Loading...</h3>
	);
}
