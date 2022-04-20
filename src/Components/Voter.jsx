/** @format */

import { useState } from 'react';
import { incArticleVotes } from '../utils/articlesApi';

export default function Voter({ article_id, setVoteCount }) {
	const [hasVoted, setHasVoted] = useState(false);

	const handleVote = (incVote) => {
		setVoteCount((currCount) => currCount + incVote);

		incArticleVotes(article_id, incVote).catch(() => {
			setVoteCount((currCount) => currCount - incVote);
			setHasVoted((voted) => !voted);
		});
		setHasVoted(!hasVoted)
	};

	return hasVoted ? (
		<button onClick={() => handleVote(-1)}>Take Back</button>
	) : (
		<button onClick={() => handleVote(1)}>Up-Vote</button>
	);
}