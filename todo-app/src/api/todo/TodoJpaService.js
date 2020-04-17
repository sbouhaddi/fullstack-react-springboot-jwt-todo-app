import axios from "axios";
import { API_JPA_URL } from "../../Constants";

class TodosJPAService {
  executeGetAllTodos(username) {
    return axios.get(`${API_JPA_URL}/${username}/todos`);
  }

  executeDeleteTodo(username, todo_id) {
    return axios.delete(`${API_JPA_URL}/${username}/todos/${todo_id}`);
  }

  executeGetTodo(username, todo_id) {
    return axios.get(`${API_JPA_URL}/${username}/todos/${todo_id}`);
  }

  executeUpdateTodo(username, todo_id, todo) {
    return axios.put(`${API_JPA_URL}/${username}/todos/${todo_id}`, todo);
  }

  executeSaveTodo(username, todo) {
    return axios.post(`${API_JPA_URL}/${username}/todos/`, todo);
  }
}

export default new TodosJPAService();
