import { createUseStyles } from "react-jss";
import { TextInput, Form, Button } from "carbon-components-react";

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
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Form className={classes.signUpForm}>
        <TextInput
          id="username"
          className={classes.input}
          labelText="Username"
          type="text"
          placeholder="username"
          required
        />
        <TextInput
          id="email"
          labelText="Email"
          type="email"
          placeholder="email"
          required
        />
        <TextInput
          id="password"
          labelText="Password"
          type="password"
          placeholder="password"
          required
        />
        <TextInput
          id="password-verify"
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
