import { useContext } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"

function LoginCoach() {
  const { loginCoach } = useContext(DrivingSchoolContext)
  return (
    <div className="bg">
    <Container className="form-signup">
    <div className="name">
      <h1>Coach</h1>
      </div>
      <Form className="w-50 mx-auto " onSubmit={loginCoach}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required />
        </Form.Group>

        <Button className="mb-3" variant="secondary" type="submit">
          Login
        </Button>
        <Link to="/forgot-password-coach" style={{color:"white"}}>
            <p>Forgot password</p>
            </Link>
      </Form>
    </Container>
  </div>
  )
}

export default LoginCoach
