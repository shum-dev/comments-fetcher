import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const apiCall = (method, path, data) => new Promise((resolve, reject) => axios[method](path, data)
  .then((res) => {
    resolve(res.data);
  })
  .catch((err) => reject(err)));

export default apiCall;
