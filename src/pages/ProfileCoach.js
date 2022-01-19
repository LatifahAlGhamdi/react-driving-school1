import { useContext, useState } from "react"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"
import {FiPhone} from "react-icons/fi"
import {MdOutlineEmail} from "react-icons/md"
import{FaUserEdit} from "react-icons/fa"
import EditProfileCoachModal from "../components/EditProfileCoachModal"
import {BsFillPersonBadgeFill} from "react-icons/bs"

function ProfileCoach() {
  const [editShow, setEditShow] = useState(false)
  const { profile  } = useContext(DrivingSchoolContext)
 
  
  const date = new Date(profile?.interview?.date)
  const datebirth = new Date(profile?.dateOfBirth)
 
 

  
  if (!profile) return null
  return (
    <div className="bg">
      <div className="form-profile">
    <div className="cardd">
    <div className="card-headerr">
    <img src={profile.avatar} alt="" className="profile-img" />
    </div>
    <div onClick={() => setEditShow(true)}><FaUserEdit style={{fontSize:"40px", cursor: "pointer"}}/></div>
      <h2>
         {profile.firstName} {profile.lastName}
      </h2>
      <p><MdOutlineEmail style={{ fontSize: "20px" }}/> {profile.email}</p>
      <p><img src="https://cdn-icons.flaticon.com/png/512/3675/premium/3675063.png?token=exp=1641710574~hmac=424d3c7d71c2869160d0c171aaf9884a" alt="" style={{ width:"25px", marginRight:"5px" }} />{profile.gender}</p>
      <p><FiPhone style={{ fontSize: "20px" }}/> {profile.mobileNumber}</p>
      <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5N_iPJpQm7rvqlep9UAkr5OrCzd4kxoDcVw&usqp=CAU" alt="" style={{ width:"25px", marginRight:"5px" }} />{datebirth.toLocaleDateString()}</p>
      <p><BsFillPersonBadgeFill style={{ fontSize: "20px" }}/> {profile.nationalIDOrIqamaNumber}</p>
      <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhj5CSSOal_1h8_25a8VwYHljrPHqWLIDfQA&usqp=CAU" alt="" style={{ width:"80px", marginRight:"5px" }}/>{profile.experience}</p>
      <a href={profile.curriculumVitae} target="_blank" ><img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/cv-294-1108422.png" alt="" style={{ width:"40px", marginRight:"5px", marginBottom:"15px" }}/></a>
     {profile?.interview?(
     <div className="card-bodyy">
        
     <div className="cardd-appointment">
     <h2>Interview</h2>
     <p>{date.toLocaleString()}</p>
    </div>

   </div>
     ):null}
       
      
    </div>
    </div>
    <EditProfileCoachModal key={profile._id} show={editShow} setShow={setEditShow} profile={profile}/>
    </div>

  )
}

export default ProfileCoach
