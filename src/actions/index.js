import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api'
const API_key = '?key=steph94';

export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts${API_key}`);

	return {
		type: FETCH_POSTS,
		payload: request
	}
}

export function createPost(values, callback) {
	const request = axios.post(`${ROOT_URL}/posts${API_key}`, values)
		.then( () => callback());

	return {
		type: CREATE_POST,
		payload: request
	}
}

export function fetchSinglePost(id) {
	const request = axios.get(`${ROOT_URL}/posts/${id}${API_key}`);

	return {
		type: FETCH_SINGLE_POST,
		payload: request
	}
}

export function deletePost(id, callback) {
	const request = axios.delete(`${ROOT_URL}/posts/${id}${API_key}`)
		.then( () => callback());

	return {
		type: DELETE_POST,
		payload: id
	}
}