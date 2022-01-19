import { useContext } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"

function EditProfileCoachModal(props) {
  const { setShow, show , profile} = props
  const { editProfileCoach } = useContext(DrivingSchoolContext)
  const experience = [
    "yes",
    "no"
  ]

  
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => editProfileCoach(e , profile._id)}>
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
            <Form.Label>National id or iqamaNumber</Form.Label>
            <Form.Control type="number" name="nationalIDOrIqamaNumber" defaultValue={profile.nationalIDOrIqamaNumber}  />
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Experience</Form.Label>

            <Form.Select name="experience">
              {experience.map(type=>(
                <option value={type}>{type}</option>
              ))}


            </Form.Select>
            {/* <Form.Control type="text" name="experience" defaultValue={profile.experience}  /> */}
          </Form.Group>
          
          
          <Form.Group controlId="formBasicLastName">
            <Form.Label>Mobile number</Form.Label>
            <Form.Control type="number" name="mobileNumber" defaultValue={profile.mobileNumber}  />
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Another mobile number</Form.Label>
            <Form.Control type="number" name="anotherMobileNumber" defaultValue={profile.anotherMobileNumber}  />
          </Form.Group>
          

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Curriculum vitae</Form.Label>
            <Form.Control type="file" accept="application/pdf,application/vnd.ms-excel" name="curriculumVitae"  />
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

export default EditProfileCoachModal
