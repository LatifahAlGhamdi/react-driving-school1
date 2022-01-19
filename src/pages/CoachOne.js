import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import AddAppointmentModal from "../components/AddAppointmentModal"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"

function CoachOne() {
  const { coachId } = useParams()
  const { coaches } = useContext(DrivingSchoolContext)
  const [addShow, setAddShow] = useState(false)

  const coach = coaches.find(coach => coach._id === coachId)
  if (!coach) return <h1>Loding...</h1>
  return (
    <>
      <div className="bg">
      <div className="form-profile">
    <div className="cardd">
    <div className="card-headerr">
    <img src={coach.avatar} alt="" className="profile-img" />
    </div>
        <h1>{coach.firstName} {coach.lastName}</h1>
        <button className="btnn" onClick={() => setAddShow(true)}><span>appointment</span></button>
      </div>
      </div>
      </div>
     
      <AddAppointmentModal show={addShow} setShow={setAddShow} coachId={coach._id} />
     
    </>
  )
}

export default CoachOne
