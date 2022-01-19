import { useContext } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"

function EditProfileModal(props) {
  const { setShow, show , profile} = props
  const { editProfile } = useContext(DrivingSchoolContext)
  
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => editProfile(e , profile._id)}>
        <Modal.Header closeButton>
          <Modal.Title>edit profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" name="firstName" defaultValue={profile.firstName} />
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" name="lastName" defaultValue={profile.lastName}  />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicimage">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" accept="image/jpeg, image/png" name="avatar"   />
          </Form.Group>

         

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="number" name="mobileNumber" defaultValue={profile.mobileNumber}  />
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Another Mobile Number</Form.Label>
            <Form.Control type="number" name="anotherMobileNumber" defaultValue={profile.anotherMobileNumber}  />
          </Form.Group>
          </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default EditProfileModal
