import axios from "axios";
const BASE_URL = "http://localhost:9000/employees";

export function saveEmployee(employee) {
  return axios.post(BASE_URL, employee);
}

export function getAllEmployees() {
  return axios.get(BASE_URL);
}

export function deleteEmployeeFromServer(id) {
  return axios.delete(`${BASE_URL}/${id}`);
}
export function updateEmployeeFromServer(id, data) {
  // console.log(id, data);
  return axios.put(`${BASE_URL}/${id}`, data);
}
