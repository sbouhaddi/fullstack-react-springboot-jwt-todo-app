import axios from "axios";
import { API_URL } from "../../Constants";

class TodosService {
  executeGetAllTodos(username) {
    return axios.get(`${API_URL}/users/${username}/todos`);
  }

  executeDeleteTodo(username, todo_id) {
    return axios.delete(`${API_URL}/users/${username}/todos/${todo_id}`);
  }

  executeGetTodo(username, todo_id) {
    return axios.get(`${API_URL}/users/${username}/todos/${todo_id}`);
  }

  executeUpdateTodo(username, todo_id, todo) {
    return axios.put(`${API_URL}/users/${username}/todos/${todo_id}`, todo);
  }

  executeSaveTodo(username, todo) {
    return axios.post(`${API_URL}/users/${username}/todos/`, todo);
  }
}

export default new TodosService();
