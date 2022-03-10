/** @format */

import { useState } from 'react';
import { incArticleVotes } from '../utils/articlesApi';

export default function Voter({ article, setVoteCount }) {
	const [hasVoted, setHasVoted] = useState(false);

	const handleVote = (inc) => {
		setVoteCount((currCount) => currCount + inc);

		incArticleVotes(article.article_id, inc).catch(() => {
			setVoteCount((currCount) => currCount - inc);
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
