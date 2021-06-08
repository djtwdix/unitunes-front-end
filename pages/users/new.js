import { createUseStyles } from "react-jss";
import { TextInput, Form, Button } from "carbon-components-react";
import { useState } from "react";
import axios from "axios";

const useStyles = createUseStyles({
  signUpForm: {
    width: "80vw",
    maxWidth: "700px",
    minHeight: "50vh",
    color: "white",
    backgroundColor: "gray",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    borderRadius: "20px",
    padding: "25px",
  },
  container: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: "100%",
    display: "flex",
    justifyContent: "center",
  },
});

export default function SignUp() {
  const [form, setForm] = useState({});
  const classes = useStyles();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/users/new", form);
  };
  return (
    <div className={classes.container}>
      <Form onSubmit={handleSubmit} className={classes.signUpForm}>
        <TextInput
          onChange={handleChange}
          id="username"
          name="username"
          className={classes.input}
          labelText="Username"
          type="text"
          placeholder="username"
          required
        />
        <TextInput
          onChange={handleChange}
          id="email"
          name="email"
          labelText="Email"
          type="email"
          placeholder="email"
          required
        />
        <TextInput
          id="password"
          name="password"
          labelText="Password"
          type="password"
          placeholder="password"
          required
        />
        <TextInput
          id="password-verify"
          name="password-verify"
          labelText="Confirm Password"
          type="password"
          placeholder="verify password"
          required
        />
        <Button className={classes.button}>Submit</Button>
      </Form>
    </div>
  );
}
