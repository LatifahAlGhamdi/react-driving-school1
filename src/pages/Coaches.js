import { useContext } from "react";
import { Link } from "react-router-dom";
import DrivingSchoolContext from "../utils/DrivingSchoolContext";

function Coaches() {
    const {coaches} = useContext(DrivingSchoolContext)
    return (  
        <div className="bg">
        <div className="form-profile">
        <div className="cardd-bodyy">
        <div className="cardd-coaches" style={{marginLeft:"90px"}}>
          {coaches.map(coach => (
            <>
              <Link to={`/coach/${coach._id}`}  style={{textDecoration:"none", color:"white"}}>
                <img src={coach.avatar} alt="" className="avatar" />
                <p style={{fontSize:"18px"}}>{coach.firstName} {coach.lastName}</p>
              </Link>
            </>
          ))}
        </div>
        </div>
        </div>
        </div>
    );
}

export default Coaches;