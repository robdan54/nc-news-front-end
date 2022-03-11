/** @format */


import { Card } from 'react-bootstrap';



export default function CommentCard({ comment }) {


	return (
        <Card key={comment.comment_id}>
			<Card.Subtitle style={{ alignSelf: 'start' }}>
				By: {comment.author}
			</Card.Subtitle>
			<Card.Body>{comment.body}</Card.Body>
			
		</Card>
	);
}
