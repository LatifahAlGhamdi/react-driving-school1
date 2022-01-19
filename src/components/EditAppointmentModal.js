import { useContext } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"

function EditAppointmentModal(props) {
  const { setShow, show , coachId, appointmentId,appointment} = props
  const { editAppointment } = useContext(DrivingSchoolContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => editAppointment(e , coachId, appointmentId)}>
        <Modal.Header closeButton>
          <Modal.Title>edit appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>Date:</Form.Label>
            <Form.Control type="date" name="name" defaultValue={appointment.name}  />
          </Form.Group>
          </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Edit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default EditAppointmentModal
