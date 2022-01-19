import { useContext, useState } from "react"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"
import{FaUserEdit} from "react-icons/fa"
import EditProfileModal from "../components/EditProfileModal"
import {FiPhone} from "react-icons/fi"
import {MdOutlineEmail} from "react-icons/md"

function Profile() {
  const [editShow, setEditShow] = useState(false)
  

  const { profile} = useContext(DrivingSchoolContext)
  
  if (!profile) return null


  return (
    <>
    <div className="bg">
      <div className="form-profile">
    <div className="cardd">
      <div className="card-headerr">
      <img src={profile.avatar} alt="" className="profile-img" />
      </div>
      <div className="card-bodyy">
      <div onClick={() => setEditShow(true)}><FaUserEdit style={{fontSize:"40px", cursor: "pointer"}}/></div>
        <h2>
           {profile.firstName} {profile.lastName}
        </h2>
        
        <p><MdOutlineEmail style={{ fontSize: "20px" }}/> {profile.email}</p>
        <p><img src="https://cdn-icons.flaticon.com/png/512/3675/premium/3675063.png?token=exp=1641710574~hmac=424d3c7d71c2869160d0c171aaf9884a" alt="" style={{ width:"25px", marginRight:"5px" }} />{profile.gender}</p>
       <p><FiPhone style={{ fontSize: "20px" }}/> {profile.mobileNumber}</p>
       
        <p>{profile.anotherMobileNumber}</p>
      </div>
    
    </div>
    </div>
    </div>
    <EditProfileModal key={profile._id} show={editShow} setShow={setEditShow} profile={profile} />
    
    </>
  )
}

export default Profile
