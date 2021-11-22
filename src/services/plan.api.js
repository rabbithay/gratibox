import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:4000'
  : 'https:/';

export function getProductsList(config) {
  return axios.get(`${BASE_URL}/products`, config);
}
export function signPlan(body, config) {
  return axios.post(`${BASE_URL}/plan`, body, config);
}
