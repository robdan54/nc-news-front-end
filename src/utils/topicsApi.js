/** @format */

import axios from 'axios';

export const fetchTopics = () => {
    return axios.get('https://nc-news-robin.herokuapp.com/api/topics').then((res) => {
        return res.data.topics
    })
}