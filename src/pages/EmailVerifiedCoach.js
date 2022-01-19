import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function EmailVerifiedCoach() {
    const {token} = useParams()
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const verifyEmailToken = async () =>{
        try{
            await axios.get(`http://localhost:3000/api/coaches/verify_email/${token}`)
            toast.success("email verified")
            navigate("/loginCoach")
        }catch{
            if(error.response) toast.error(error.response.data)
            else console.log(error)
            setError(true)
        }
    }
    useEffect(()=>{
        verifyEmailToken()
    },[])
    return error ? <h1>Verification failed</h1> : <h1>Verifying</h1>
}

export default EmailVerifiedCoach;