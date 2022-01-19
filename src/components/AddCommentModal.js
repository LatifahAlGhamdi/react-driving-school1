import { useContext } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import DrivingSchoolContext from "../utils/DrivingSchoolContext";

function AddCommentModal(props) {
    const { setShow, show , messageId } = props
    const { addComment } = useContext(DrivingSchoolContext)
    return (
      <Modal show={show} onHide={() => setShow(false)}>
        <Form onSubmit={e => addComment(e , messageId)}>
          <Modal.Header closeButton>
            <Modal.Title>Add comment</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>comment</Form.Label>
              <Form.Control  as="textarea" rows="3" type="text" name="comment"  />
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

export default AddCommentModal;