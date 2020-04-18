import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-149d1.firebaseio.com/'
})