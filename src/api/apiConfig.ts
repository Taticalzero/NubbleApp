import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
  headers: {
    Authorization:
      'Bearer NQ.24Yotckc9slxpLMbKiVpOUxJDdN9FrIkIEgZF7_1ZRyXmhX6jofx8ZNGKf20',
  },
});
