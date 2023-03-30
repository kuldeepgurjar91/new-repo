import {
  DELETE_EMPLOYEE,
  FETCH_ALL_EMPLOYEES,
  REGISTER_EMPLOYEE,
  UPDATE_EMPLOYEE,
} from "../constants/ActionConstants";
import {
  getAllEmployees,
  saveEmployee,
  deleteEmployeeFromServer,
  updateEmployeeFromServer,
} from "../services/EmployeeService";

export const registerEmployee = (employee) => async (dispatch) => {
  try {
    const response = await saveEmployee(employee);
    console.log(response);
    dispatch({
      type: REGISTER_EMPLOYEE,
      payload: response.data,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fetchAllEmployees = () => async (dispatch) => {
  console.log("fetching...");
  try {
    const response = await getAllEmployees();
    dispatch({
      type: FETCH_ALL_EMPLOYEES,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteEmployeeAction = (employeeId) => async (dispatch) => {
  console.log("deleting....");
  try {
    await deleteEmployeeFromServer(employeeId);
    dispatch({
      type: DELETE_EMPLOYEE,
    });
    return Promise.resolve();
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};
export const updateEmployeeAction = (newData, upData) => async (dispatch) => {
  console.log("updating...");
  const { _id } = newData;
  // console.log(empId);
  // console.log(newData);
  try {
    const response = await updateEmployeeFromServer(_id, upData);
    fetchAllEmployees();
    // console.log(response);
    dispatch({
      type: UPDATE_EMPLOYEE,
      payload: response.data,
    });
    return Promise.resolve();
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};
