import { useContext } from "react"
import { Button, Container, Form } from "react-bootstrap"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"

function ForgotPasswordCoach() {
  const { forgotPasswordCoach } = useContext(DrivingSchoolContext)
  return (
    <div className="bg">
        <Container className="form-signup">
        <div className="name">
      <h1>Coach</h1>
      </div>
          <Form className="w-50 mx-auto " onSubmit={forgotPasswordCoach}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control name="email" type="email" placeholder="Enter email" required />
            </Form.Group>

            <Button className="mb-3" variant="secondary" type="submit">
              Send Reset Password Link
            </Button>
 
          </Form>
        </Container>
      </div>
  )
}

export default ForgotPasswordCoach
