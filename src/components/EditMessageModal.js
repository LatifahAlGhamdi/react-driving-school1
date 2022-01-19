import { useContext } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import DrivingSchoolContext from "../utils/DrivingSchoolContext";

function EditMessageModal(props) {
    const { setShow, show , userId,message} = props
    const { editMessage } = useContext(DrivingSchoolContext)
    return (
      <Modal show={show} onHide={() => setShow(false)}>
        <Form onSubmit={e => editMessage(e , userId, message._id)}>
          <Modal.Header closeButton>
            <Modal.Title>edit message</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form.Group controlId="formBasicFirstName">
              <Form.Label>Time:</Form.Label>
              <Form.Control type="datetime-local" name="time"  defaultValue={message.time}  />
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
    

export default EditMessageModal;