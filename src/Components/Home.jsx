/** @format */

import {
	ListGroup,
	DropdownButton,
	Dropdown,
	Button,
	ButtonGroup,
} from 'react-bootstrap';
import { useEffect, useState } from 'react';

import * as articlesApi from '../utils/articlesApi';

import ArticleCard from './ArticleCard';
import { fetchTopics } from '../utils/topicsApi';
import { useNavigate } from 'react-router-dom';

export default function Home() {
	const [topics, setTopics] = useState([]);
	const [sortBy, setSortBy] = useState(undefined);
	const [filter, setFilter] = useState(undefined);
	const [isLoading, setIsLoading] = useState(true);
	const [articles, setArticles] = useState([]);
	const [possibleSortBys, setPossibleSortBys] = useState([]);
	const [order, setOrder] = useState('asc');

	const navigate = useNavigate();

	useEffect(() => {
		setIsLoading(true);
		fetchTopics().then((topicsFromApi) => {
			setTopics(topicsFromApi.map((topicFromApi) => topicFromApi.slug));
			setIsLoading(false);
		});
	}, []);

	useEffect(() => {
		setIsLoading(true);
		articlesApi.fetchArticles(filter, sortBy, order).then((articlesFromApi) => {
			setArticles(articlesFromApi);
			setPossibleSortBys(Object.keys(articlesFromApi[0]));
			setIsLoading(false);
		});
	}, [filter, sortBy, order]);

	const handleFilterClick = (topicFromClick) => {
		setFilter(topicFromClick);
		if (topicFromClick && sortBy) {
			navigate(`/?topic=${topicFromClick}&&sort_by=${sortBy}`);
		} else if (sortBy) {
			navigate(`/?sort_by=${sortBy}`);
		} else if (topicFromClick) {
			navigate(`/?topic=${topicFromClick}`);
		} else {
			navigate('/');
		}
	};

	const handleSortByClick = (sortByFromClick) => {
		setSortBy(sortByFromClick);

		if (filter && sortByFromClick) {
			navigate(`/?topic=${filter}&&sort_by=${sortByFromClick}`);
		} else if (sortByFromClick) {
			navigate(`/?sort_by=${sortByFromClick}`);
		} else if (filter) {
			navigate(`/?topic=${filter}`);
		} else {
			navigate('/');
		}
	};

	return !isLoading ? (
		<div className='mb-2 articleList'>
			<ButtonGroup>
				<Button
					id='order'
					variant='dark'
					style={{ alignSelf: 'end' }}
					onClick={() => {
						order === 'asc' ? setOrder('desc') : setOrder('asc');
					}}>
					{order === 'asc' ? 'Ascending' : 'Descending'}
				</Button>
				<DropdownButton
					id='filter'
					title={filter || 'Filter'}
					variant='dark'
					style={{ alignSelf: 'start' }}>
					{topics.map((topic) => {
						return (
							<Dropdown.Item
								key={topic}
								onClick={() => handleFilterClick(topic)}>
								{topic}
							</Dropdown.Item>
						);
					})}
					<Dropdown.Item
						key='reset'
						onClick={() => handleFilterClick(undefined)}>
						Reset
					</Dropdown.Item>
				</DropdownButton>
				<DropdownButton
					id='sortBy'
					title={sortBy || 'Sort-by'}
					variant='dark'
					style={{ alignSelf: 'start' }}>
					{possibleSortBys.map((sort) => {
						return (
							<Dropdown.Item key={sort} onClick={() => handleSortByClick(sort)}>
								{sort}
							</Dropdown.Item>
						);
					})}
					<Dropdown.Item
						key='reset'
						onClick={() => {
							handleSortByClick(undefined);
						}}>
						Reset
					</Dropdown.Item>
				</DropdownButton>
			</ButtonGroup>
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
