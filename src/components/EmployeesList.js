// import { StatusCodes } from "http-status-codes";
import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllEmployees,
  deleteEmployeeAction,
  updateEmployeeAction,
} from "../actions/EmployeeActions";

export function EmployeesList() {
  const employees = useSelector((state) => state.employeeReducer);
  const dispatch = useDispatch();
  // console.log(employees);

  const [employeeId, setEmployeeId] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [isUpdata, setIsUpdata] = useState(true);
  const [updateData, setUpdataData] = useState([]);
  const [newData, setNewData] = useState([]);
  const closeModal = () => {
    setShowDialog(false);
  };
  const openModal = () => {
    setShowDialog(true);
  };

  const handleChange = (e) => {
    setUpdataData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  };
  // const handleSubmit = (e) => {
  //   e.praventDefault();
  //   // dispatch(updateEmployeeAction(newData.id, updateData))
  //   //   .then(() => {
  //   //     dispatch(fetchAllEmployees());
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //   });
  //   // setIsUpdata(true);
  //   console.log("SUBMITTED");
  // };

  const deleteEmployee = () => {
    dispatch(deleteEmployeeAction(employeeId))
      .then(() => {
        closeModal();
        dispatch(fetchAllEmployees());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    dispatch(fetchAllEmployees());
  }, [dispatch]);

  return (
    <>
      <Container className="mt-4 text-center">
        <Alert variant="success">List of employees</Alert>
      </Container>
      {isUpdata ? (
        <Container>
          <Table bordered>
            <thead>
              <tr>
                <th>Employee Id</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Salary</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((item) => {
                return (
                  <>
                    <tr>
                      <td>{item.empId}</td>
                      <td>{item.name}</td>
                      <td>{item.phone}</td>
                      <td>{item.salary}</td>
                      <td>
                        <Button
                          variant="danger"
                          className="btn-sm"
                          onClick={() => {
                            setEmployeeId(item._id);
                            openModal();
                          }}
                        >
                          Delete
                        </Button>{" "}
                        <Button
                          variant="primary"
                          className="btn-sm"
                          onClick={() => {
                            setEmployeeId(item._id);
                            setNewData(item);
                            setIsUpdata(false);
                          }}
                        >
                          Update
                        </Button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
        </Container>
      ) : (
        <Container>
          <Container className="mt-4">
            <Form
              onSubmit={async (e) => {
                e.preventDefault();
                dispatch(updateEmployeeAction(newData, updateData));
                await dispatch(fetchAllEmployees())
                  .then(() => {
                    // window.location.reload();
                  })
                  .catch((error) => {
                    console.log(error);
                  });
                setIsUpdata(true);
              }}
            >
              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Employee Id</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={newData.empId}
                      name="empId"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={newData.name}
                      name="name"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={newData.phone}
                      name="phone"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={newData.salary}
                      name="salary"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <input
                type={"submit"}
                value="Update"
                className="btn btn-primary"
              ></input>
            </Form>
          </Container>
        </Container>
      )}
      <Modal show={showDialog} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure ?</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={deleteEmployee} className="btn-sm">
            Yes, Delete
          </Button>
          <Button variant="danger" className="btn-sm" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
