/** @format */


import { useState } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Voter from './Voter';


export default function ArticleCard({ article }) {
	const [voteCount, setVoteCount] = useState(article.votes)


	

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
			<Voter article={article} setVoteCount={setVoteCount}/>
		</>
	);
}
