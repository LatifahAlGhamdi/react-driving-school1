import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { toast } from "react-toastify"
import DrivingSchoolContext from "../utils/DrivingSchoolContext"
import {GiMoneyStack} from "react-icons/gi"
import {GiEmptyHourglass} from "react-icons/gi"

function RatingsCoach() {
    const [ratings, setRatings] = useState([])
  

    const getRatings = async ()=>{
      try{
  
        const response = await axios.get("https://api-driving-school.herokuapp.com/api/coaches/profile/ratings",{
          headers: {
            Authorization: localStorage.token,
          },
        })
        setRatings(response.data)
 
      }catch (error) {
        if (error.response) toast.error(error.response.data)
        else console.log(error)
      }
    }
    const { profile } = useContext(DrivingSchoolContext)
    useEffect(()=>{
      getRatings()
      },[profile])
    if (!profile) return null
    return ( 
        <div className="form-profile">
           <div className="name" style={{marginBottom:"50px"}}>
              <h1>Ratings</h1>
            </div>
        <div className="cardd-bodyy">
        <div className="cardd-coaches" style={{marginLeft:"90px"}}>
        {ratings.map(rating=>(
        <div>
        <img src={rating?.userId?.avatar} alt="" className="avatar" />
        <p>{rating?.userId?.firstName} </p>
        <p><GiEmptyHourglass style={{ fontSize: "20px" }}/> {rating.numberOfHours}</p>
        <p><GiMoneyStack style={{ fontSize: "20px" }}/> {rating.price}</p>
        ------------------------
        </div>
        ))}
        </div>
        </div>
        </div>
     );
}

export default RatingsCoach;