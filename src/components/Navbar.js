import { useContext } from "react"
import { Link } from "react-router-dom"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"
import { RiHome8Line } from 'react-icons/ri';
import {FiUserPlus} from 'react-icons/fi';
import{FiLogIn} from 'react-icons/fi';
import{CgProfile} from 'react-icons/cg';
import{FiLogOut} from 'react-icons/fi'
import{VscPerson} from "react-icons/vsc"
import {BiBookContent} from "react-icons/bi"
import {MdDateRange} from "react-icons/md"
import {GiStarsStack} from "react-icons/gi"
import {BiMessageSquareDetail} from "react-icons/bi"
import {RiTrafficLightFill} from "react-icons/ri"
function Navbar() {
  const { logout, profile } = useContext(DrivingSchoolContext)

  return (
    <nav className="navbar">
      <ul className="main">
          <div className="nav-l">
              <Link to="/" style={{textDecoration:"none", color:"white"}}>
                <li> <RiHome8Line style={{fontSize:"20px"}}/>  Home</li>
              </Link>
              
              <Link to="/trafficInformation" style={{textDecoration:"none", color:"white"}}>
                <li> <RiTrafficLightFill style={{fontSize:"20px"}}/>  Traffic instructions</li>
              </Link>
              </div>
              
              <div className="nav-r">
              {localStorage.token === undefined ? (
        
          
        <>
        
              <li className="content" style={{color:"white", cursor: "pointer"}}><FiUserPlus style={{fontSize:"20px", width:"20px"}}/> Sign up
            <div className="sub-menu">
              <ul>
              <Link to="/signup" style={{textDecoration:"none", color:"white"}}>
                <li> Trainee</li>
              </Link>
              <Link to="/signupCoach" style={{textDecoration:"none", color:"white"}}>
                <li> Coach</li>
              </Link>
              </ul>
              </div>
              </li>
              <li className="content" style={{color:"white", cursor: "pointer"}}><FiLogIn style={{fontSize:"20px", width:"20px"}}/> Login
            <div className="sub-menu">
              <ul>
              <Link to="/login" style={{textDecoration:"none", color:"white"}}>
                <li>  Trainee</li>
              </Link>

              <Link to="/loginCoach" style={{textDecoration:"none", color:"white"}}>
                <li>  Coach</li>
              </Link>
              </ul>
              </div>
              </li>
            </>
          
      ) : (
        
         
            <>
            
            <li className="content" style={{color:"white", cursor: "pointer"}}><BiBookContent style={{fontSize:"20px", width:"20px"}}/> Content
            <div className="sub-menu">
              <ul>
           
          <>
          {profile?.role === "Coach"?(
            <>
            <Link to="/appointmentsCoach" style={{textDecoration:"none", color:"white"}} >
          <li > <MdDateRange style={{fontSize:"20px"}}/> Appointments</li>
          </Link>
          <Link to="/ratingsCoach" style={{textDecoration:"none", color:"white"}}>
        <li> <GiStarsStack style={{fontSize:"20px"}}/> Ratings </li>
        </Link>
          <Link to="/messagesCoach" style={{textDecoration:"none", color:"white"}}>
            <li> <BiMessageSquareDetail style={{fontSize:"20px"}}/> Messages</li>
           </Link>
            </>
          ):(
            <>
            <Link to="/coaches" style={{textDecoration:"none", color:"white"}}>
            <li><VscPerson style={{fontSize:"20px", width:"20px"}} /> Coaches</li>
            </Link>
            
            <Link to="/appointments" style={{textDecoration:"none", color:"white"}} >
          <li> <MdDateRange style={{fontSize:"20px"}}/> Appointments</li>
          </Link>
             <Link to="/ratings" style={{textDecoration:"none", color:"white"}}>
            <li > <GiStarsStack style={{fontSize:"20px"}}/> Ratings</li>
           </Link>

           <Link to="/messages" style={{textDecoration:"none", color:"white"}}>
            <li> <BiMessageSquareDetail style={{fontSize:"20px"}}/> Messages</li>
           </Link>
            </>
          )}
          

          </>
        
              </ul>
            </div>
            </li>
            
              {profile?.role === "User" ? (
                <Link to="/profile" style={{textDecoration:"none", color:"white"}}>
                  <li> <CgProfile style={{fontSize:"20px"}}/> Profile</li>
                </Link>
              ) : (
                <Link to="/profileCoach" style={{textDecoration:"none", color:"white"}}>
                  <li> <CgProfile style={{fontSize:"20px"}}/>Profile</li>
                </Link>
              )}
              <li>
                <div onClick={logout} style={{color: "white" ,cursor: "pointer"}}> <FiLogOut style={{fontSize:"20px"}}/>logout</div>
              </li>
            </>
      )}
      </div>
      </ul>

    </nav>
  )
}

export default Navbar
