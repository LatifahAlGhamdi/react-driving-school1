import { useContext } from "react"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"
import { Link } from "react-router-dom"
import {BsCalendarDate} from "react-icons/bs"
import {MdOutlineSpeakerNotes} from "react-icons/md"
import {GiEmptyHourglass} from "react-icons/gi" 

function MessagesCoach() {
    
    
    const {messages} = useContext(DrivingSchoolContext)
     
    return ( 

      <div className="form-profile">
         <div className="name">
      <h1>Messages</h1> 
      </div>
        <div className="cardd-bodyy">
        <div className="cardd-coaches" style={{marginLeft:"90px", marginTop:"20px"}}>
        {messages?.map(message=>(
          <div>
            <Link to={`/user/${message.userId._id}/messagesCoach/${message._id}`} style={{textDecoration:"none", color:"white"}}>
            
        <img src={message.userId.avatar} alt="" className="avatar" />
        <p>{message.userId.firstName}</p>
        <p><GiEmptyHourglass style={{ fontSize: "20px" }}/> {message.numberOfHours}</p>
        <p><BsCalendarDate style={{ fontSize: "20px" }} /> {message.time.replace('T',' ')}</p>
        <h2>comments</h2>
        {message.comments?.map(comment =>(
          <>
          <p><MdOutlineSpeakerNotes style={{ fontSize: "20px" }}/> {comment.comment}</p>
          </>
        ))}
        
        </Link>
        --------------------------------
        </div>
        ))}
        </div>
        </div>
        </div>
        
           /* {comments.map(comment => (
                <>
                 <Link to={`/commentCoach/${comment._id}/user/${comment.userId._id}`}  style={{textDecoration:"none", color:"#444"}}>
                <img src={comment.userId.avatar} alt="" className="avatar" />
                <p style={{fontSize:"18px",color:"white"}}>{comment.userId.firstName}</p>
                <p style={{fontSize:"18px",color:"white"}}>{comment.comment}</p>
                </Link>
                </>
            ))} */

         
        
        

      // <div className="form-profile">
      //   <div className="cardd-coaches" style={{marginLeft:"10px"}}>
      //      <div className="cardd-cardd-message">
      //        <div className="cardd-message">
      //   <div className="cardd-bodyy">
        
      //   {messages.map(message=>(
      //     <>
      //     <div style={{marginLeft:"130px", display:'flex', gap:"10px", marginTop:"5px"}}>
      //     <div onClick={()=> setEditMessageShow(true)}><BiMessageEdit style={{fontSize:"30px", cursor: "pointer"}}/></div>
      //     <div >
      //         <MdDeleteForever style={{ fontSize: "30px", cursor: "pointer" }} />
      //       </div>
      //     </div>
         
      //   <div>
      //   <img src={message.userId.avatar} alt="" className="avatar" />
      //   <p>{message.userId.firstName}</p>
      //   <p>{message.time}</p>
      //   <p>{message.price}</p>
      //   </div>
        
      //   <EditMessageModal show={editMessageShow} setShow={editMessageShow} userId={message.userId._id} message={message}/>
      //   </>
      //   ))}
      //   </div>
      //   </div>
      //   </div>
      //   </div>
      //   </div>
       
      //  onClick={() => setDeleteMessageShow(true)}
     );
}

export default MessagesCoach;