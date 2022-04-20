/** @format */

import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchCommentsByArticle } from '../utils/CommentApi';
import CommentCard from './CommentCard';
import PostComment from './PostComment';

export default function Comments() {
	const navigate = useNavigate();
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isDeleting, setIsDeleting] = useState(false);

	const { article_id } = useParams();

	useEffect(() => {
		fetchCommentsByArticle(article_id).then((commentsFromApi) => {
			setComments(commentsFromApi);
			setIsLoading(false);
		});
	}, [article_id, isDeleting]);

	return !isLoading ? (
		<div className='articleList'>
			<Button
				variant='dark'
				style={{ alignSelf: 'start' }}
				onClick={() => {
					navigate(`/article/${article_id}`);
				}}>
				Back to Article
			</Button>

			{comments.map((comment) => {
				return (
					<CommentCard
						isDeleting={isDeleting}
						setIsDeleting={setIsDeleting}
						comment={comment}
						key={comment.comment_id}
					/>
				);
			})}
			<PostComment setComments={setComments} />
		</div>
	) : (
		<h3>Loading...</h3>
	);
}
