import DrivingSchoolContext from "../utils/DrivingSchoolContext"
import{BsCalendarDate} from "react-icons/bs"
import { Link } from "react-router-dom"
import { useContext } from "react"
import {FiPhone} from "react-icons/fi"
import {MdOutlineEmail} from "react-icons/md"
  
function AppointmentsCoach() {
  const { appointmentsCoach} = useContext(DrivingSchoolContext)
    return ( 
        <>
        
        <div className="form-profile">
        <div className="name">
      <h1>Appointments</h1> 
      </div>
      
        <div className="cardd-bodyy">
        <div className="cardd-coaches" style={{marginLeft:"90px", marginTop:"20px"}}>
        
         {appointmentsCoach?.map(appointment => (
         
         <div>
            
           <Link to={`/user/${appointment?.userId?._id}/appointmentsCoach/${appointment._id}`} style={{textDecoration:"none", color:"white"}} >
           
           <p><BsCalendarDate style={{fontSize:"20px"}}/> {appointment.name}</p>
          
           <p>
             {appointment?.userId?.firstName} {appointment?.userId?.lastName}
           </p>
           <img src={appointment?.userId?.avatar} alt="" className="avatar" />
           <p><MdOutlineEmail style={{ fontSize: "20px" }}/> {appointment?.userId?.email}</p>
           <p><FiPhone style={{ fontSize: "20px" }}/> {appointment?.userId?.mobileNumber}</p>
           <p>{appointment?.userId?.anotherMobileNumber}</p>
         </Link>
         --------------------------------
         </div>
        ))}
        </div>
        </div>
        </div>
        
        
       
           
              </>
     )
}

export default AppointmentsCoach;