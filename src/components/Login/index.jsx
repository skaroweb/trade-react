import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row, Form, Button, Container, InputGroup } from "react-bootstrap";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const serverURL = process.env.REACT_APP_SERVER_URL;
const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });

  //console.log(serverURL);
  const navigate = useNavigate();
  // const [error, setError] = useState(""); // Uncomment if you want to display error messages

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // If token exists, navigate to dashboard
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const apiUrl = process.env.REACT_APP_PUBLIC_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${apiUrl}/api/auth/login`; // Ensure you use the correct endpoint for login
      const response = await axios.post(url, data);
      toast.success("Logged in successfully!");
      // Assuming the token is in response.data.token (adjust as necessary)
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.username);

      // Redirect to dashboard or another page
      // Delay navigation
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000); // Adjust time as needed
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        // Optionally set error state if you want to display it
        // setError(error.response.data.message);
        toast.warn(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };
  return (
    <>
      <main>
        <section className="d-flex align-items-center ">
          <Container className="contain">
            <Row className="justify-content-center form-bg-image">
              <Col
                xs={12}
                className="d-flex align-items-center justify-content-center"
              >
                <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                  <div className="text-center text-md-center mb-4 mt-md-0">
                    <h3 className="mb-0 signtext">Sign in to Trade</h3>
                  </div>
                  <Form className="mt-4" onSubmit={handleSubmit}>
                    <Form.Group id="username" className="mb-4">
                      <Form.Label>UserName</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <i
                            className="fa fa-envelope colorgreen"
                            aria-hidden="true"
                          ></i>
                        </InputGroup.Text>
                        <Form.Control
                          autoFocus
                          required
                          type="text"
                          placeholder="UserName"
                          name="username"
                          value={data.username}
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group>
                      <Form.Group id="password" className="mb-4">
                        <Form.Label>Password</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <i
                              className="fa fa-unlock-alt colorgreen"
                              aria-hidden="true"
                            ></i>
                          </InputGroup.Text>
                          <Form.Control
                            required
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </Form.Group>
                    </Form.Group>
                    <Button type="submit" className="w-100 signcta">
                      Sign in
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Login;
