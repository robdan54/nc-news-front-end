import axios from 'axios'

export const fetchArticles = () => {
    return axios.get('https://nc-news-robin.herokuapp.com/api/articles').then((res) => {
        return res.data.articles
    })
}

export const fetchArticleById = (id) => {
    
    
    return axios.get(`https://nc-news-robin.herokuapp.com/api/articles/${id}`).then((res) => {
        return res.data.article
    });
}