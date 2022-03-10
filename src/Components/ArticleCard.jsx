/** @format */

import { useState } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { incArticleVotes } from '../utils/articlesApi';

export default function ArticleCard({ article }) {
	const [voteCount, setVoteCount] = useState(article.votes);

	const [isDisabled, setIsDisabled] = useState(false);

	

	return (
		<>
			<ListGroupItem
				key={article.article_id}
				as={Link}
				to={`/article/${article.article_id}`}>
				<dl key={article.article_id + 'details'}>
					<dt key={article.article_id + 'title'}>{article.title}</dt>

					<dd key={article.article_id + 'topic'}>topic: {article.topic}</dd>
					<dd key={article.article_id + 'author'}>by: {article.author}</dd>
					<dd key={article.article_id + 'votes'}>votes: {voteCount}</dd>
				</dl>
			</ListGroupItem>
			<button
				onClick={() => {
					setVoteCount((currCount) => currCount + 1);
					incArticleVotes(article.article_id);
					setIsDisabled(true);
				}}
				disabled={isDisabled}>
				Up-Vote
			</button>
		</>
	);
}
