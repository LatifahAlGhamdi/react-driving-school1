import { useContext } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { useParams } from "react-router-dom"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"

function ResetPassword() {
  const { resetPassword } = useContext(DrivingSchoolContext)
  const {token} = useParams()
  return (
    <div className="bg">
        <Container className="form-signup">
        <div className="name">
      <h1>Trainee</h1>
      </div>
          <Form className="w-50 mx-auto " onSubmit={e => resetPassword(e,token)}>
            
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password Confirm</Form.Label>
              <Form.Control name="passwordConfirmation" type="password" placeholder="Password" required />
            </Form.Group>

            <Button className="mb-3" variant="secondary" type="submit">
              Reset password
            </Button>
            
            
          </Form>
        </Container>
      </div>
  )
}

export default ResetPassword
