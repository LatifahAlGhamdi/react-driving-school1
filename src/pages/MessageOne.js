import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EditMessageModal from "../components/EditMessageModal";
import DrivingSchoolContext from "../utils/DrivingSchoolContext";
import {BiMessageEdit} from "react-icons/bi"
import { MdDeleteForever } from "react-icons/md"
import DeleteMessageModal from "../components/DeleteMessageModal";
import {FaCommentMedical} from "react-icons/fa"
import AddCommentModal from "../components/AddCommentModal";
import {BsCalendarDate} from "react-icons/bs"
import {MdOutlineSpeakerNotes} from "react-icons/md"
import {GiEmptyHourglass} from "react-icons/gi"


function MessageOne() {
    // const [editMessageShow, setEditMessageShow] = useState(false)
    const [deleteMessageShow, setDeleteMessageShow] = useState(false)
    const [addCommentShow, setAddCommentShow] = useState(false)
    const {messageId , userId} = useParams()
    const {messages} = useContext(DrivingSchoolContext)

    const message = messages.find(message => message._id == messageId)
    if (!message) return <h1>Loding...</h1>
    return ( 
        <div className="form-profile">
             <div className="name">
      <h1>Message & Comments</h1>
      </div>
      <div className="cardd-coaches">
           <div className="cardd-cardd-appointments">
             <div className="cardd-message">
        <div className="cardd-bodyy">

        
        <div style={{marginLeft:"300px", display:'flex', gap:"10px", marginTop:"5px",marginRight:"5px", padding:"10px",border:"1px solid rgba(0, 0, 0, 0.329)"}}>
          {/* <div onClick={()=> setEditMessageShow(true)}><BiMessageEdit style={{fontSize:"30px", cursor: "pointer"}}/></div> */}
          <div onClick={() => setDeleteMessageShow(true)}>
              <MdDeleteForever style={{ fontSize: "30px", cursor: "pointer" }} />
            </div>
          </div>
          
        <img src={message.userId.avatar} alt="" className="avatar" />
        <p>{message.userId.firstName}</p>
        <p><GiEmptyHourglass style={{ fontSize: "20px" }}/> {message.numberOfHours}</p>
        <p><BsCalendarDate style={{ fontSize: "20px" }} /> {message.time.replace('T',' ')}</p>
        <div style={{marginLeft:"290px", display:'flex', gap:"10px", marginTop:"5px", marginRight:"5px", padding:"10px",border:"1px solid rgba(0, 0, 0, 0.329)"}}>
        <div onClick={()=> setAddCommentShow(true)}><FaCommentMedical style={{fontSize:"30px", cursor: "pointer"}}/></div>
        
        </div>
        <h2>comments</h2> 
        
        {message.comments.map(comment =>(
          <>
          <Link to={`/user/${message.userId._id}/messagesCoach/${message._id}/comment/${comment._id}`} style={{textDecoration:"none", color:"#444"}}>
          <p><MdOutlineSpeakerNotes style={{ fontSize: "20px" }}/> {comment.comment}</p>
          </Link>
          </>
        ))}
        </div>
        </div>
        {/* <EditMessageModal show={editMessageShow} setShow={setEditMessageShow} userId={userId} message={message}/> */}
        <DeleteMessageModal show={deleteMessageShow} setShow={setDeleteMessageShow} userId={userId} messageId={messageId}/>
        <AddCommentModal show={addCommentShow} setShow={setAddCommentShow} messageId={messageId}/>
        </div>


          </div>
        </div>
        
     );
}

export default MessageOne;