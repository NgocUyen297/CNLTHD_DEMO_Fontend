import axios from 'axios';
import cookies from 'react-cookies';


export const endpoint = {
    'categories': '/categories/',
    'courses': '/courses/',
    'lessons': (coursesId) =>`/courses/${coursesId}/lessons/`,
    'lesson-detail': (lessonId) =>`/lessons/${lessonId}/`,
    'login': '/o/token/',
    'current-user': '/users/current-user/'
}

export const authAPI = () => axios.create({
    baseURL:'https://thanhduong.pythonanywhere.com/',
    headers: {
        'Authorization': `Bearer ${cookies.load('access-token')}`
    }

})

export default axios.create({
    baseURL: 'https://thanhduong.pythonanywhere.com/'
})