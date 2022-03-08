/** @format */

import { ListGroupItem } from 'react-bootstrap';

export default function ArticleCard({ article }) {
	return (
		<ListGroupItem as='li'>
			<dl>
				<dt>{article.title}</dt>

				<dd>topic: {article.topic}</dd>
				<dd>by: {article.author}</dd>
			</dl>
		</ListGroupItem>
	);
}
