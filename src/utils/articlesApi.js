import axios from 'axios'

export const fetchArticles = () => {
    return axios.get('https://nc-news-robin.herokuapp.com/api/articles').then((res) => {
        return res.data.articles
    })
}