import{BsCalendarDate} from "react-icons/bs"
import {BiMessageAdd} from "react-icons/bi"
import { useContext, useState } from "react"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"
import { useParams } from "react-router-dom"
import AddMessageModal from "../components/AddMessageModal"
import {FiPhone} from "react-icons/fi"
import {MdOutlineEmail} from "react-icons/md"
import AddRatingModal from "../components/AddRatingModal"
import {AiFillStar} from "react-icons/ai"

function AppointmentCoachOne() {
    const [addRatingShow, setAddRatingShow] = useState(false)
    const [addMessageShow, setAddMessageShow]= useState(false)
    const {appointmentId ,userId} = useParams()
    const { appointmentsCoach } = useContext(DrivingSchoolContext)
    const appointment = appointmentsCoach.find(appointment => appointment._id == appointmentId)
    if (!appointment) return <h1>Loding...</h1>
  
    return ( 


        <div className="form-profile">
           <div className="name">
      <h1>Add Rating & Message</h1>
      </div>
        <div className="cardd-coaches">
           <div className="cardd-cardd-appointments">
             <div className="cardd-message">
        <div className="cardd-bodyy">
        
         <div style={{marginLeft:"280px", display:'flex', gap:"10px", marginTop:"5px"}}>
         <div onClick={()=>setAddMessageShow(true)}><BiMessageAdd style={{fontSize:"30px", cursor: "pointer"}}/></div>
         </div>
        
    
            <h2>Appointment</h2>
            <p><BsCalendarDate style={{fontSize:"20px"}}/> {appointment.name}</p>
            
            <p>
              {appointment?.userId?.firstName} {appointment?.userId?.lastName}
            </p>
            <img src={appointment?.userId?.avatar} alt="" className="avatar" />
            <p><MdOutlineEmail style={{ fontSize: "20px" }}/> {appointment.userId?.email}</p>
            <p><FiPhone style={{ fontSize: "20px" }}/> {appointment?.userId?.mobileNumber}</p>
            <p>{appointment?.userId?.anotherMobileNumber}</p>
            <button onClick={()=> setAddRatingShow(true)} style={{backgroundColor:"black",width:"50px",padding:"5px", color:"white", marginBottom:"10px", borderRadius:"10px"}}> <AiFillStar /></button>
            <AddRatingModal show={addRatingShow} setShow={setAddRatingShow}  userId={userId}/>
           



            <AddMessageModal show={addMessageShow} setShow={setAddMessageShow} userId={userId} />
            
            
            
        </div>
        </div>
        </div>
        </div>
        </div>
     );
}

export default AppointmentCoachOne;