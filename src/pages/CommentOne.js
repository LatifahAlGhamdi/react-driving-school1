import { useContext, useState } from "react";
import {  useParams } from "react-router-dom";
import DrivingSchoolContext from "../utils/DrivingSchoolContext";
import {BiMessageRoundedEdit} from "react-icons/bi"
import {MdDeleteForever} from "react-icons/md"
import EditCommentModal from "../components/EditCommentModal";
import DeleteCommentModal from "../components/DeleteCommentModal";


function CommentOne() {
    const {messageId,commentId } = useParams()
    const {comments} = useContext(DrivingSchoolContext)
    const [editCommentShow , setEditCommentShow] = useState(false)
    const [deleteCommentShow, setDeleteCommentShow] = useState(false)

    const comment = comments.find(comment => comment._id  == commentId)
    if (!comment) return <h1>Loding...</h1>
    return ( 
        <div className="form-profile">
        <div className="name">
       <h1>Comment</h1>
      </div>
      <div className="cardd-coaches">
           <div className="cardd-cardd-appointments">
             <div className="cardd-message">
        <div className="cardd-bodyy">

        <div style={{marginLeft:"260px", display:'flex', gap:"10px", marginTop:"5px",marginRight:"5px", padding:"10px",border:"1px solid rgba(0, 0, 0, 0.329)"}}>
          <div onClick={()=> setEditCommentShow(true)}><BiMessageRoundedEdit style={{fontSize:"30px", cursor: "pointer"}}/></div>
          <div onClick={() => setDeleteCommentShow(true)}>
              <MdDeleteForever style={{ fontSize: "30px", cursor: "pointer" }} />
            </div>
          </div>
        
        <p style={{fontSize:"18px"}}> {comment.comment}</p>
        </div>
        <EditCommentModal show={editCommentShow} setShow={setEditCommentShow} messageId={messageId}  commentId={commentId} comment={comment}  />
        <DeleteCommentModal show={deleteCommentShow} setShow={setDeleteCommentShow}  messageId={messageId}  commentId={commentId} />
        </div>
        </div>
        </div>
        </div>
     );
}

export default CommentOne;