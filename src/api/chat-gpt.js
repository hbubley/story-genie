import axios from 'axios'

export default axios.create({
  baseURL: `https://api.openai.com/v1/chat/completions`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
  }
})
