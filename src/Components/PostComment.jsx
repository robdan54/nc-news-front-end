/** @format */

import { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { UserContext } from '../Contexts/UserContext';
import { postComment } from '../utils/CommentApi';

export default function PostComment({ setComments }) {
	const { loggedUser } = useContext(UserContext);
	const [newCommentBody, setNewCommentBody] = useState('');
	const { article_id } = useParams();

	const handleSubmit = (event) => {
		event.preventDefault();
		setComments((currComments) => {
			return [
				{
					body: newCommentBody,
					author: loggedUser,
					comment_id: loggedUser + currComments.length + '_tmp',
				},
				...currComments,
			];
		});

		postComment(article_id, {
			body: newCommentBody,
			username: loggedUser,
		})
			.then(() => {
				alert('comment posted sucessfully');
			})
			.catch(() => {
				setComments((errComments) => {
					errComments.shift();
					return errComments;
				});
				alert(
					'problem posting comment please check your connection and try again'
				);
			});
	};
	return (
		<Form onSubmit={handleSubmit}>
			<Form.Label>Share your thoughts</Form.Label>
			<Form.Control
				type='text'
				placeholder='write your comment here'
				onChange={(event) => {
					setNewCommentBody(event.target.value);
				}}
			/>
			<Button variant='dark' type='submit'>
				{' '}
				Post Comment
			</Button>
		</Form>
	);
}
