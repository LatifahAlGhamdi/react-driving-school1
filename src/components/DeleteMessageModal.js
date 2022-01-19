import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import DrivingSchoolContext from "../utils/DrivingSchoolContext";

function DeleteMessageModal(props) {
    const { deleteMessage } = useContext(DrivingSchoolContext)
    const { show, setShow , userId, messageId} = props
    return (
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete message</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this message ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => deleteMessage(  userId, messageId)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default DeleteMessageModal;