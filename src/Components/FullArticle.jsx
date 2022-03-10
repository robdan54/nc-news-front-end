/** @format */

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById, incArticleVotes } from '../utils/articlesApi';
import { useNavigate } from 'react-router-dom';

export default function FullArticle() {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(true);
	const [article, setArticle] = useState({});
	const [voteCount, setVoteCount] = useState(0);
	const [isDisabled, setIsDisabled] = useState(false);
	const { article_id } = useParams();
	
	useEffect(() => {
		setIsLoading(true);
		fetchArticleById(article_id).then((articleFromApi) => {
			setArticle(articleFromApi);
			setIsLoading(false);
			setVoteCount(articleFromApi.votes)
		});
	}, [article_id]);

	

	return !isLoading ? (
		<article>
			<h1>{article.title}</h1>
			<p className='text-secondary'>{article.body}</p>

			<h6> Article by {article.author}</h6>

			<h6
				className='text-secondary text-left'
				onClick={() => {
					navigate(`/article/${article_id}/comments`);
				}}>
				{' '}
				Comments: {article.comment_count}
			</h6>
			<h6>Votes: {voteCount}</h6>
			<button
				onClick={() => {
					setVoteCount((currCount) => currCount + 1);
					incArticleVotes(article_id);
					setIsDisabled(true);
				}}
				disabled={isDisabled}>
				Up-Vote
			</button>
		</article>
	) : (
		<h3>Loading...</h3>
	);
}
