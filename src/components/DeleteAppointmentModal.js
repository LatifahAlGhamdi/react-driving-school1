import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import DrivingSchoolContext from "../utils/DrivingSchoolContext";

function DeleteAppointmentModal(props) {
    const { deleteAppointment } = useContext(DrivingSchoolContext)
    const { show, setShow , coachId , appointmentId} = props
    return (
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this appointment ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => deleteAppointment( coachId, appointmentId)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default DeleteAppointmentModal;