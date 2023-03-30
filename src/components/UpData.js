// import { useState } from "react";
// import { Container, Form } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { updateEmployeeAction } from "../actions/EmployeeActions";

// export function upData() {
//   const [updateData, setUpdataData] = useState([]);

//     const dispatch=useDispatch()
//     const handleChange = (e) => {
//       setUpdataData({
//         ...updateData,
//         [e.target.name]: e.target.value,
//       });
//     };

//     return (
//       <>
//         <Container className="mt-4">
//           <Form
//             onSubmit={(e) => {
//               e.preventDefault();
//               dispatch(updateEmployeeAction(newData, updateData))
//                 .then(() => {
//                 //   fetchAllEmployees();
//                   // window.location.reload();
//                 //   <navigate to={<EmployeesList />} />;
//                 })
//                 .catch((error) => {
//                   console.log(error);
//                 });
//               setIsUpdata(true);
//             }}
//           >
//             <Row>
//               <Col lg={6}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Employee Id</Form.Label>
//                   <Form.Control
//                     type="text"
//                     defaultValue={newData.empId}
//                     name="empId"
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col lg={6}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     defaultValue={newData.name}
//                     name="name"
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col lg={6}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Phone</Form.Label>
//                   <Form.Control
//                     type="text"
//                     defaultValue={newData.phone}
//                     name="phone"
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col lg={6}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Salary</Form.Label>
//                   <Form.Control
//                     type="text"
//                     defaultValue={newData.salary}
//                     name="salary"
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>
//             <input
//               type={"submit"}
//               value="Update"
//               className="btn btn-primary"
//             ></input>
//           </Form>
//         </Container>
//       </>
//     );
// }
