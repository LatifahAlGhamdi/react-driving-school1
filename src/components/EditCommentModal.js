import { useContext } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import DrivingSchoolContext from "../utils/DrivingSchoolContext";

function EditCommentModal(props) {
    const { setShow, show , messageId, commentId,comment} = props
    const { editComment } = useContext(DrivingSchoolContext)
    return (
      <Modal show={show} onHide={() => setShow(false)}>
        <Form onSubmit={e => editComment(e , messageId, commentId)}>
          <Modal.Header closeButton>
            <Modal.Title>edit comment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="formBasicFirstName">
              <Form.Label>comment:</Form.Label>
              <Form.Control  as="textarea" rows="3" type="text" name="comment"  defaultValue={comment.comment}  />
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
    

export default EditCommentModal;