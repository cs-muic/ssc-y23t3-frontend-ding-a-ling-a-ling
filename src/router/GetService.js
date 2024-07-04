import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

class UserService {
    getUser(id) {
        return axios.get(`${API_BASE_URL}/user/${id}`);
    }

    createUser(userData) {
        return axios.post(`${API_BASE_URL}/user/create`, null, { params: userData });
    }

    updateUser(userData) {
        return axios.post(`${API_BASE_URL}/user/update`, null, { params: userData });
    }

    searchUser(query) {
        return axios.get(`${API_BASE_URL}/search`, { params: { q: query } });
    }

    getProfile(username) {
        return axios.get(`${API_BASE_URL}/profile/${username}`);
    }

    loginUser(username, password) {
        return axios.get(`${API_BASE_URL}/signin`, { params: { username: username, password: password } });
    }

}

export default new UserService();