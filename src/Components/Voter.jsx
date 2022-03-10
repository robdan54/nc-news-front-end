/** @format */

import { useState } from 'react';
import { incArticleVotes } from '../utils/articlesApi';

export default function Voter({ article, setVoteCount }) {
	const [isDisabled, setIsDisabled] = useState(false);

	return (
		<button
			onClick={() => {
				setVoteCount((currCount) => currCount + 1);
				incArticleVotes(article.article_id).catch(() => {
					setVoteCount((currCount) => currCount - 1);
					setIsDisabled(false);
				});
				setIsDisabled(true);
			}}
			disabled={isDisabled}>
			Up-Vote
		</button>
	);
}
