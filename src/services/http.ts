import axios from 'axios'

const BASE_URL = 'http://localhost:8080'

type ClientType = {
  get<T>(path: string): Promise<T>
  post<T, R>(path: string, body: T): Promise<R>
  put<T, R>(path: string, body: T): Promise<R>
  delete<T>(path: string): Promise<T>
}

function httpClient(baseUrl: string = BASE_URL): ClientType {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVXNlciIsInV1aWQiOiI3ZTk3NzlmNi0xNWRhLTQ0NTctYjdlZS1lMDI2MzI5Y2I2MDUiLCJ1c2VyX25hbWUiOiJ1c2VyQHVzZXIuY29tIiwianRpIjoiMTg5M2QyMjgtZTJmMC00YTQzLWFlOTktYzgwNzkzNmJkZjhmIiwiY2xpZW50X2lkIjoiZGVsaXZlcnkiLCJzY29wZSI6WyJSRUFEIiwiV1JJVEUiXX0.ufUFFlWnO8SsKiksWECmLgx0AF_01DpYNpZgGlfz_Wc'
    }
  })

  instance.interceptors.response.use(response => response.data)

  return {
    get: path => instance.get(`${baseUrl}/${path}`),
    post: (path, body) => instance.post(`${baseUrl}/${path}`, body),
    put: (path, body) => instance.put(`${baseUrl}/${path}`, body),
    delete: path => instance.delete(`${baseUrl}/${path}`)
  }
}

export default httpClient
