import { BsCalendarDate } from "react-icons/bs"
import { BiEdit } from "react-icons/bi"
import {  useContext, useState } from "react"
import { MdDeleteForever } from "react-icons/md"
import { useParams } from "react-router-dom"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"
import DeleteAppointmentModal from "../components/DeleteAppointmentModal"
import EditAppointmentModal from "../components/EditAppointmentModal"
import {FiPhone} from "react-icons/fi"
import {MdOutlineEmail} from "react-icons/md"

function AppointmentsOne() {
  const {appointmentId, coachId} = useParams()
  const {appointments} = useContext(DrivingSchoolContext)
  const [deleteShow, setDeleteShow] = useState(false)
  // const [editShow, setEditShow] = useState(false)

  const appointment = appointments.find(appointment => appointment._id == appointmentId)
  // const { profile } = useContext(DrivingSchoolContext)
 
  // const date = new Date(profile.message.time)
  if (!appointment) return <h1>Loding..</h1>
 
  return (
    <>
       <div className="form-profile">
      <div className="cardd-coaches">
           <div className="cardd-cardd-appointments">
             <div className="cardd-message">
        <div className="cardd-bodyy">

          <h2>Appointment</h2>
          <div style={{ marginLeft: "300px", display: "flex", gap: "10px" }}>
            {/* <div onClick={() => setEditShow(true)}>
              <BiEdit style={{ fontSize: "30px", cursor: "pointer" }} />
            </div> */}

            <div onClick={() => setDeleteShow(true)}>
              <MdDeleteForever style={{ fontSize: "30px", cursor: "pointer" }} />
            </div>
          </div>
          <p>
            <BsCalendarDate style={{ fontSize: "20px" }} /> {appointment.name}
          </p>
         
          <p>
            {appointment.coachId.firstName} {appointment.coachId.lastName}
          </p>
          <img src={appointment.coachId.avatar} alt="" className="avatar" />
          <p><MdOutlineEmail style={{ fontSize: "20px" }}/> {appointment.coachId.email}</p>
          <p><FiPhone style={{ fontSize: "20px" }}/> {appointment.coachId.mobileNumber}</p>
          {appointment.coachId.anotherMobileNumber == undefined ?null:(
         <p>{appointment.coachId.anotherMobileNumber}</p>
          )}
         
          {/* <EditAppointmentModal
            show={editShow}
            setShow={setEditShow}
            appointment={appointment}
            appointmentId={appointmentId}
            coachId={coachId}
          /> */}
          <DeleteAppointmentModal
            show={deleteShow}
            setShow={setDeleteShow}
            appointmentId={appointmentId}
            coachId={coachId}
          />
        </div>
        </div>
        </div>
        </div>
        </div>
    
    </>
  )
}

export default AppointmentsOne
