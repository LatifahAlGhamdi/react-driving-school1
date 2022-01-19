import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import DrivingSchoolContext from "../utils/DrivingSchoolContext";

function DeleteCommentModal(props) {
    const { deleteComment } = useContext(DrivingSchoolContext)
    const { show, setShow ,messageId, commentId} = props
    return (
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this Comment ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => deleteComment( messageId, commentId)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default DeleteCommentModal;