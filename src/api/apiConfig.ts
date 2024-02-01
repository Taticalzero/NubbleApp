import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
  headers: {
    Authorization:
      'Bearer NA.6_4P_UVnW4mQU_NNzNijPSQ4qma4ZLtgQwH6PqXTvK6zZDKGHEYqeEfgj0xQ',
  },
});
