import { useContext } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"

function AddAppointmentModal(props) {
  const { setShow, show, coachId } = props
  const { addAppointment } = useContext(DrivingSchoolContext)

 
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => addAppointment(e, coachId)}>
        <Modal.Header closeButton>
          <Modal.Title>Add appointment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>date</Form.Label>
            <Form.Control type="date" name="name" />
          </Form.Group>
           </Modal.Body>
          
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default AddAppointmentModal
