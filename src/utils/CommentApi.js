/** @format */

import axios from 'axios';

export const fetchCommentsByArticle = (id) => {
	return axios
		.get(`https://nc-news-robin.herokuapp.com/api/articles/${id}/comments`)
		.then((res) => {
			return res.data.comments;
		});
};

export const postComment = (id, comment) => {
	return axios.post(
		`https://nc-news-robin.herokuapp.com/api/articles/${id}/comments`, comment
	);
};

export const deleteComment = (id) => {
	return axios.delete(`https://nc-news-robin.herokuapp.com/api/comments/${id}`);
}
