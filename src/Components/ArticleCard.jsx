/** @format */

import { ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ArticleCard({ article }) {
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
					<dd key={article.article_id + 'votes'}>votes: {article.votes}</dd>
				</dl>
			</ListGroupItem>
		</>
	);
}
