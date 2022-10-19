import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Logo from '../images/logo.jpg';
import "../css/Login.css";

function Login() {
  const [validate, setValidate] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    const regex = /\S+@\S+\.\S+/;
    const magicNumber = 6;
    if (regex.test(email) && password.length > magicNumber) {
      setValidate(false);
    } else {
      setValidate(true);
    }
  }, [email, password]);

  const saveUser = () => {
    localStorage.setItem("user", JSON.stringify({ email }));
    localStorage.setItem("mealsToken", 1);
    localStorage.setItem("cocktailsToken", "1");
    history.push("/foods");
  };

  return (
    <div className="login-page">
      <img src={Logo} alt="logo" id="logo" />
      <form className="login-form">
        <div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="title-form">Email</Form.Label>
            <Form.Control
              value={email}
              id="email"
              name="email"
              data-testid="email-input"
              type="email"
              onChange={({ target }) => setEmail(target.value)}
              required
              placeholder="Digite seu email"
            />
            <Form.Text className="text-muted text">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="title-form">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              name="password"
              data-testid="password-input"
              onChange={({ target }) => setPassword(target.value)}
              required
            />
            <div className="button">
              <Button
                variant="primary"
                type="submit"
                id="button"
                data-testid="login-submit-btn"
                disabled={validate}
                onClick={saveUser}
              >
                Enter
              </Button>
            </div>
          </Form.Group>
        </div>
      </form>
    </div>
  );
}

export default Login;
