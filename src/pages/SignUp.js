import { useContext } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"

function SignUp() {
  const { signUp } = useContext(DrivingSchoolContext)
  const gender = [
    "male",
    "female",
  ]
  return (
    <div className="bg">
      <Container className="form-signup">
        <div className="name">
      <h1>Trainee</h1>
      </div>
        <Form className="w-50 mx-auto " onSubmit={signUp}>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First name *</Form.Label>
            <Form.Control type="text" name="firstName" placeholder="First name" required />
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last name *</Form.Label>
            <Form.Control type="text" name="lastName" placeholder="Last name" required />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address *</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password *</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password Confirm *</Form.Label>
              <Form.Control name="passwordConfirmation" type="password" placeholder="Password" required />
            </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicimage">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" accept="image/jpeg, image/png" name="avatar" placeholder="image" />
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Gender *</Form.Label>
            <Form.Select name="gender">
              {gender.map(type=>(
                <option value={type}>{type}</option>
              ))}


            </Form.Select>
             {/* <Form.Control type="text" name="gender" placeholder="Female or Male" required /> */}
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Mobile Number *</Form.Label>
            <Form.Control type="number" name="mobileNumber" placeholder="Enter your Mobile Number" required />
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Another Mobile Number</Form.Label>
            <Form.Control type="number" name="anotherMobileNumber" placeholder="Enter Another Mobile Number" />
          </Form.Group>

          <Button className="mb-3 btn" variant="secondary" type="submit">
            Signup
          </Button>
        </Form>
      </Container>
      
    </div>
  )
}

export default SignUp
