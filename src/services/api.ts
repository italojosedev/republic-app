import axios from 'axios'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiY2xhc3MiOiJ1c2VyIiwiaWF0IjoxNjU0MjE4MTQ4fQ.ZsZYUYJE_HrpbV9oQK9Z7BYaGKuct8xhV2p1McdSi6U'
export default axios.create({
  baseURL: 'http://localhost:3333/api',
  headers: {
    'Authorization': `Bearer ${token}`
  },
})