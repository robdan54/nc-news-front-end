/** @format */

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById } from '../utils/articlesApi';
import { useNavigate } from 'react-router-dom';

export default function FullArticle() {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(true);
	const [article, setArticle] = useState({});
	const { article_id } = useParams();

	useEffect(() => {
		setIsLoading(true);
		fetchArticleById(article_id).then((articleFromApi) => {
			setArticle(articleFromApi);
			setIsLoading(false);
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
		</article>
	) : (
		<h3>Loading...</h3>
	);
}
