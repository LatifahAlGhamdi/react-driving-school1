import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { toast } from "react-toastify"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"
import {BsCalendarDate} from "react-icons/bs"
import {GiMoneyStack} from "react-icons/gi"
import {MdOutlineSpeakerNotes} from "react-icons/md"
import {GiEmptyHourglass} from "react-icons/gi"
function Messages() {
    const [messages, setMessages] = useState([])
  

  const getMessages = async ()=>{
    try{

      const response = await axios.get("https://api-driving-school.herokuapp.com/api/auth/profile/user/messages",{
        headers: {
          Authorization: localStorage.token,
        },
      })
      setMessages(response.data)
     
    }catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const { profile } = useContext(DrivingSchoolContext)
  useEffect(()=>{
    getMessages()
    },[profile])
  if (!profile) return null

    return ( 
        
        <div className="form-profile">
          <div className="name">
      <h1>Messages</h1> 
      </div>
        <div className="cardd-bodyy">
        <div className="cardd-coaches" style={{marginLeft:"90px", marginTop:"20px"}}>
        {messages.map(message=>(
        <div>
        <img src={message.coachId.avatar} alt="" className="avatar" />
        <p>{message.coachId.firstName}</p>
        <p><GiEmptyHourglass style={{ fontSize: "20px" }}/> {message.numberOfHours}</p>
        <p> <BsCalendarDate style={{ fontSize: "20px" }} /> {message.time.replace('T',' ')}</p>
        <h2>comments</h2>
        {message.comments?.map(comment =>(
          <>
          <p><MdOutlineSpeakerNotes style={{ fontSize: "20px" }}/> {comment.comment}</p>
          </>
        ))}
        </div>
        ))}
        </div>
        </div>
        </div>
       

     );
}

export default Messages;