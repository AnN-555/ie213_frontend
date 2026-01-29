import axios from "axios";
const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

class MovieDataService {
    getAll(page = 0) {
        return axios.get(`${API_URL}/api/v1/movies?page=${page}`)
    }
    get(id: any) {
        return axios.get(`${API_URL}/api/v1/movies/id/${id}`)
    }
    find(query: any, by = "title", page = 0) {
        return axios.get(
            `${API_URL}/api/v1/movies?${by}=${query}&page=${page}`
        )
    }
    createReview(data: any) {
        return axios.post("${API_URL}/api/v1/movies/review", data)
    }
    updateReview(data: any) {
        return axios.put("${API_URL}/api/v1/movies/review", data)
    }
    deleteReview(id: any, userId: any) {
        return axios.delete(
            "${API_URL}/api/v1/movies/review",
            { data: { review_id: id, user_id: userId } }
        )
    }
    getRatings() {
        return axios.get("${API_URL}/api/v1/movies/ratings")
    }
}

export default new MovieDataService();