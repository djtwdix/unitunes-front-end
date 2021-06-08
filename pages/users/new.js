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
    alignItems: "center",
    borderRadius: "20px",
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
      <TextInput className={classes.input} type="text" placeholder="username" required/>
      <TextInput type="email" placeholder="email" required/>
      <TextInput type="password" placeholder="password" required/>
      <TextInput type="password" placeholder="verify password" required/>
      <Button className={classes.button}>Submit</Button>
      </Form>
    </div>
  );
}
