/** @format */

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCommentsByArticle } from '../utils/articlesApi';
import CommentCard from './CommentCard';

export default function Comments() {
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const { article_id } = useParams();

	useEffect(() => {
		fetchCommentsByArticle(article_id).then((commentsFromApi) => {
			setComments(commentsFromApi);
			setIsLoading(false);
		});
	}, [article_id]);

	return !isLoading ? (
		<>
			{comments.map((comment) => {
				return <CommentCard comment={comment} key={comment.comment_id} />;
			})}
		</>
	) : (
		<h3>Loading...</h3>
	);
}
