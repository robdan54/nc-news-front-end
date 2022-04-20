/** @format */

import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';

import { Card } from 'react-bootstrap';
import { UserContext } from '../Contexts/UserContext';
import { deleteComment } from '../utils/CommentApi';

export default function CommentCard({ isDeleting, setIsDeleting, comment }) {
	const { loggedUser } = useContext(UserContext);

	const handleDelete = (id) => {
		setIsDeleting(true);
		deleteComment(id)
			.then(() => {
				alert('Deletion sucessful');
				setIsDeleting(false);
			})
			.catch(() => {
				alert(
					'Error deleting comment please check your connections and try again'
				);
				setIsDeleting(false);
			});
	};

	return comment.author === loggedUser ? (
		<Card key={comment.comment_id}>
			<Card.Subtitle style={{ alignSelf: 'start' }}>
				By: {comment.author}
			</Card.Subtitle>
			<Card.Body>{comment.body}</Card.Body>
			<Button
				variant='light'
				onClick={!isDeleting ? () => handleDelete(comment.comment_id) : null}>
				{isDeleting ? 'Deleting...' : 'Delete'}
			</Button>
		</Card>
	) : (
		<Card key={comment.comment_id}>
			<Card.Subtitle style={{ alignSelf: 'start' }}>
				By: {comment.author}
			</Card.Subtitle>
			<Card.Body>{comment.body}</Card.Body>
		</Card>
	);
}
