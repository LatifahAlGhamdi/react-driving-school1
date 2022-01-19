import { useContext } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import DrivingSchoolContext from "../utils/DrivingSchoolContext";

function AddMessageModal(props) {
    const { setShow, show, userId } = props
    const { addMessage } = useContext(DrivingSchoolContext)
    const numberOfHours=[
      "2"
    ]
    return (
      <Modal show={show} onHide={() => setShow(false)}>
        <Form onSubmit={e => addMessage(e, userId)}>
          <Modal.Header closeButton>
            <Modal.Title>Add message</Modal.Title>
          </Modal.Header>
          

          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Number of hours</Form.Label>
              <Form.Select name="numberOfHours">
              {numberOfHours.map(type=>(
                <option value={type}>{type}</option>
              ))}


            </Form.Select>
            </Form.Group>

          
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>time</Form.Label>
              <Form.Control type="datetime-local" name="time"  />
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

export default AddMessageModal;