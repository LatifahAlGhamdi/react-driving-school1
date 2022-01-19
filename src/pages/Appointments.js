import { useContext } from "react";
import { Link } from "react-router-dom";
import DrivingSchoolContext from "../utils/DrivingSchoolContext";
import {BsCalendarDate} from "react-icons/bs"
import {FiPhone} from "react-icons/fi"
import {MdOutlineEmail} from "react-icons/md"

function Appointments() {
    const {appointments} = useContext(DrivingSchoolContext)

    return ( 
        <div className="bg">
        <div className="form-profile">
        <div className="name">
      <h1>Appointments</h1> 
      </div>
        <div className="cardd-bodyy">
        <div className="cardd-coaches" style={{marginLeft:"90px", marginTop:"20px"}}>
        {appointments.map(appointment => (
         <Link to={`/coach/${appointment.coachId._id}/appointmentsOne/${appointment._id}`} style={{textDecoration:"none", color:"white"}}>
          <p>
            <BsCalendarDate style={{ fontSize: "20px" }} /> {appointment.name}
          </p>
         
          <img src={appointment.coachId.avatar} alt="" className="avatar" />
          <p>
            {appointment.coachId.firstName} {appointment.coachId.lastName}
          </p>
          <p><MdOutlineEmail style={{ fontSize: "20px" }}/> {appointment.coachId.email}</p>
          <p><FiPhone style={{ fontSize: "20px" }}/> {appointment.coachId.mobileNumber}</p>
          {appointment.coachId.anotherMobileNumber == undefined ?null:(
         <p>{appointment.coachId.anotherMobileNumber}</p>
          )}
         </Link>
        ))}
        
        </div>
        </div>
        </div>
        </div>
     );
}

export default Appointments;