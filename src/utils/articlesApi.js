/** @format */

import axios from 'axios';

export const fetchArticles = (topic, sort_by, order) => {
	return axios
		.get('https://nc-news-robin.herokuapp.com/api/articles', {
			params: { topic, sort_by, order },
		})
		.then((res) => {
			return res.data.articles;
		});
};

export const fetchArticleById = (id) => {
	return axios
		.get(`https://nc-news-robin.herokuapp.com/api/articles/${id}`)
		.then((res) => {
			return res.data.article;
		});
};

export const incArticleVotes = (id, inc_votes) => {
	return axios.patch(`https://nc-news-robin.herokuapp.com/api/articles/${id}`, {
		inc_votes
	});
};
