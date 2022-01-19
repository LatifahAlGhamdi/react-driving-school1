import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Navbar from "./components/Navbar"
import Ratings from "./pages/Ratings"
import Coaches from "./pages/Coaches"
import CoachOne from "./pages/CoachOne"
import Home from "./pages/Home"
import Login from "./pages/Login"
import LoginCoach from "./pages/LoginCoach"
import Profile from "./pages/Profile"
import ProfileCoach from "./pages/ProfileCoach"
import SignUp from "./pages/SignUp"
import SignUpCoach from "./pages/SignUpCoach"
import DrivingSchoolContext from "./utils/DrivingSchoolContext"
import Messages from "./pages/Messages"
import RatingsCoach from "./pages/RatingsCoach"
import MessagesCoach from "./pages/MessagesCoach"
import AppointmentsCoach from "./pages/AppointmentsCoach"
import MessageOne from "./pages/MessageOne"
import CommentOne from "./pages/CommentOne"
import AppointmentCoachOne from "./pages/AppointmentCoachOne"
import AppointmentsOne from "./pages/AppointmentsOne"
import Appointments from "./pages/Appointments"
import firebase from "./utils/firebase"
import TrafficInformation from "./pages/TrafficInformation"
import EmailVerified from "./pages/EmailVerified"
import EmailVerifiedCoach from "./pages/EmailVerifiedCoach"
import ForgotPassword from "./pages/ForgotPassword"
import ResetPassword from "./pages/ResetPassword"
import ForgotPasswordCoach from "./pages/ForgotPasswordCoach"
import ResetPasswordCoach from "./pages/ResetPasswordCoach"

function App() {
  const [profile, setProfile] = useState(null)
  const [coaches, setCoaches] = useState([])
  const [appointments, setAppointments] = useState([])
  const [appointmentsCoach, setAppointmentsCoach] = useState([])
  const [messages, setMessages] = useState([])
  const [comments, setComments] = useState([])
  // const [ratings, setRatings]= useState([])

  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.token) {
      getProfile()
      getCoaches()
    }
  }, [])

  const getAppointments = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/auth/profile/user/appointments", {
        headers: {
          Authorization: localStorage.token,
        },
      })
      setAppointments(response.data)
      
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const getAppointmentsCoach = async () => {
    try{
    
    const response = await axios.get("http://localhost:3000/api/coaches/profile/appointment", {
      headers: {
        Authorization: localStorage.token,
      },
    })
    setAppointmentsCoach(response.data)
    
  } catch (error) {
    if (error.response) console.log(error.response.data)
    else console.log(error)
  }
  }

  const getMessages = async ()=>{
    try{

      const response = await axios.get("http://localhost:3000/api/coaches/profile/messages",{
        headers: {
          Authorization: localStorage.token,
        },
      })
      setMessages(response.data)
      
    }catch (error) {
      if (error.response) console.error(error.response.data)
      else console.log(error)
    }
  }

  const getCommentsCoach = async ()=>{
    try{

      const response = await axios.get("http://localhost:3000/api/coaches/profile/comments",{
        headers: {
          Authorization: localStorage.token,
        },
      })
      setComments(response.data)
     
    }catch (error) {
      if (error.response) console.error(error.response.data)
      else console.log(error)
    }
  }
  
  // const getRatings = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3000/api/auth/profile/user/ratings", {
  //       headers: {
  //         Authorization: localStorage.token,
  //       },
  //     })
  //     setRatings(response.data)
  //     console.log(response.data)
  //   } catch (error) {
  //     if (error.response) toast.error(error.response.data)
  //     else console.log(error)
  //   }
  // }
  
  const getProfile = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/auth/profile", {
        headers: {
          Authorization: localStorage.token,
        },
      })
      setProfile(response.data)
      getAppointments()
      getAppointmentsCoach()
      getMessages()
      getCommentsCoach()
   
      
      // getRatings()
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }
  const getCoaches = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/coaches", {
        headers: {
          Authorization: localStorage.token,
        },
      })
      setCoaches(response.data)
      
    } catch (error) {
      if (error.response) console.error(error.response.data)
      else console.log(error)
    }
  }

  const signUp = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const password = form.elements.password.value
      const passwordConfirmation = form.elements.passwordConfirmation.value
      if (password !== passwordConfirmation) return toast.error("password is not matching")
      
      const image = form.elements.avatar.files[0];
      let imageUrl
      if (image) {
      const imageRef = firebase
        .storage()
        .ref("images").child(`${image.lastModified}-${image.name}-${image.size}`);
      await imageRef.put(image);
       imageUrl = await imageRef.getDownloadURL();
      }
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password,
        avatar: imageUrl || undefined,
        gender: form.elements.gender.value,
        mobileNumber: form.elements.mobileNumber.value,
        anotherMobileNumber: form.elements.anotherMobileNumber.value,
      }
      await axios.post("http://localhost:3000/api/auth/signup", userBody)
      toast.success("please check your email to continue registration")
      
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:3000/api/auth/login", userBody)
      localStorage.token = response.data
      toast.success("login success")
      getProfile()
      getCoaches()
      navigate("/profile")
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }

  const editProfile = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const image = form.elements.avatar.files[0];
      let imageUrl
      if (image) {
      const imageRef = firebase
        .storage()
        .ref("images").child(`${image.lastModified}-${image.name}-${image.size}`);
      await imageRef.put(image);
       imageUrl = await imageRef.getDownloadURL();
      }

      const profileBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        avatar: imageUrl|| undefined,
        mobileNumber: form.elements.mobileNumber.value,
        anotherMobileNumber: form.elements.anotherMobileNumber.value,
      }
      await axios.put("http://localhost:3000/api/auth/profile", profileBody, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      getProfile()
      toast.success("edit profile success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const editProfileCoach = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const image = form.elements.avatar.files[0];
      let imageUrl
      if (image) {
      const imageRef = firebase
        .storage()
        .ref("images").child(`${image.lastModified}-${image.name}-${image.size}`);
      await imageRef.put(image);
       imageUrl = await imageRef.getDownloadURL();
      }

      const document = form.elements.curriculumVitae.files[0];
      let documentUrl
      if(document){
        const documentRef = firebase
        .storage()
        .ref("documents")
        .child(`${document.lastModified}-${document.name}-${document.size}`);
      await documentRef.put(document);
       documentUrl = await documentRef.getDownloadURL();
      }
     

      const profileBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        avatar: imageUrl || undefined,
        nationalIDOrIqamaNumber:form.elements.nationalIDOrIqamaNumber.value,
        mobileNumber: form.elements.mobileNumber.value,
        anotherMobileNumber: form.elements.anotherMobileNumber.value,
        experience:form.elements.experience.value,
        curriculumVitae:documentUrl,
      }
      
      await axios.put("http://localhost:3000/api/coaches/profile", profileBody, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      getProfile()
      toast.success("edit profile success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addAppointment = async (e, coachId) => {
    e.preventDefault()
    try {
      const form = e.target
      const appointmentBody = {
        name: form.elements.name.value,
      }
      await axios.post(`http://localhost:3000/api/coaches/${coachId}/appointment`, appointmentBody, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      getProfile()
      toast.success("add appointment success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  // const editAppointment = async (e, coachId, appointmentId) => {
  //   e.preventDefault()
  //   try {
  //     const form = e.target
  //     const appointmentBody = {
  //       name: form.elements.name.value,
  //     }
  //     await axios.put(`http://localhost:3000/api/coaches/${coachId}/appointment/${appointmentId}`, appointmentBody, {
  //       headers: {
  //         Authorization: localStorage.token,
  //       },
  //     })
  //     getProfile()
  //     getAppointments()
  //     toast.success("edit appointment success")
  //   } catch (error) {
  //     if (error.response) toast.error(error.response.data)
  //     else console.log(error)
  //   }
  // }

  const deleteAppointment = async (coachId, appointmentId)=>{
    try{
      await axios.delete(`http://localhost:3000/api/coaches/${coachId}/appointment/${appointmentId}`,{
        headers: {
          Authorization: localStorage.token,
        },
      })
      toast.success("delete appointment success")
      getProfile()
      getAppointments()
      navigate("/appointments")
    }catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const signUpCoach = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const password = form.elements.password.value
      const passwordConfirmation = form.elements.passwordConfirmation.value
      if (password !== passwordConfirmation) return toast.error("password is not matching")

      const image = form.elements.avatar.files[0];
      let imageUrl
      if (image) {
      const imageRef = firebase
        .storage()
        .ref("images").child(`${image.lastModified}-${image.name}-${image.size}`);
      await imageRef.put(image);
       imageUrl = await imageRef.getDownloadURL();
      }

      const document = form.elements.curriculumVitae.files[0];
      let documentUrl
      if(document){
        const documentRef = firebase
        .storage()
        .ref("documents")
        .child(`${document.lastModified}-${document.name}-${document.size}`);
      await documentRef.put(document);
       documentUrl = await documentRef.getDownloadURL();
      }
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password,
        avatar: imageUrl || undefined,
        gender: form.elements.gender.value,
        dateOfBirth: form.elements.dateOfBirth.value,
        nationalIDOrIqamaNumber: form.elements.nationalIDOrIqamaNumber.value,
        experience: form.elements.experience.value,
        mobileNumber: form.elements.mobileNumber.value,
        anotherMobileNumber: form.elements.anotherMobileNumber.value,
        curriculumVitae: documentUrl,
      }
      await axios.post("http://localhost:3000/api/coaches/signup-coach", userBody)
      toast.success("please check your email to continue registration")
      
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const loginCoach = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:3000/api/coaches/login", userBody)
      localStorage.token = response.data
      toast.success("login success")
      getProfile()
      navigate("/profileCoach")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addRating = async ( e,userId) => {
    e.preventDefault()
    try {
      const form = e.target
      const ratingBody = {
        numberOfHours:form.elements.numberOfHours.value,
        price:form.elements.price.value
      }

      await axios.post(`http://localhost:3000/api/auth/users/${userId}/rating`, ratingBody, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      getProfile()
      toast.success("add rating success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addMessage = async(e,userId) =>{
    e.preventDefault()
    try{
      const form = e.target
      const messageBody = {
        numberOfHours:form.elements.numberOfHours.value,
        time:form.elements.time.value,
      }
      await axios.post(`http://localhost:3000/api/auth/users/${userId}/message`, messageBody,{
        headers: {
          Authorization: localStorage.token,
        },
      })
      getProfile()
      toast.success("add message success")
    }catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  // const editMessage = async (e, userId, messageId) =>{
  //   e.preventDefault()
  //   try{
  //     const form = e.target
  //     const messageBody = {
  //       time:form.elements.time.value,
  //     }
  //     await axios.put(`http://localhost:3000/api/auth/users/${userId}/message/${messageId}`, messageBody,{
  //       headers: {
  //         Authorization: localStorage.token,
  //       },
  //     })
  //     getProfile()
  //     toast.success("edit message success")
  //   }catch (error) {
  //     if (error.response) toast.error(error.response.data)
  //     else console.log(error)
  //   }
  // }

  const deleteMessage = async (userId, messageId) =>{
    try{

      await axios.delete(`http://localhost:3000/api/auth/users/${userId}/message/${messageId}`,{
        headers: {
          Authorization: localStorage.token,
        },
      })
      getProfile()
      toast.success("delete message success")
      navigate("messagesCoach")
    }catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  
  }

  const addComment = async(e, messageId) =>{
    e.preventDefault()
    try{
      const form = e.target
      const messageBody = {
        comment:form.elements.comment.value,
      }
      await axios.post(`http://localhost:3000/api/auth/message/${messageId}/comments`, messageBody,{
        headers: {
          Authorization: localStorage.token,
        },
      })
      getProfile()
      toast.success("add comment success")
    }catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const editComment = async(e, messageId, commentId) =>{
    e.preventDefault()
    try{
      const form = e.target
      const messageBody = {
        comment:form.elements.comment.value,
      }
      await axios.put(`http://localhost:3000/api/auth/message/${messageId}/comments/${commentId}`, messageBody,{
        headers: {
          Authorization: localStorage.token,
        },
      })
      getProfile()
      toast.success("edit comment success")
    }catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  
  const deleteComment = async ( messageId,commentId) =>{
    try{

      await axios.delete(`http://localhost:3000/api/auth/message/${messageId}/comments/${commentId}`,{
        headers: {
          Authorization: localStorage.token,
        },
      })
      getProfile()
      toast.success("delete comment success")
      navigate("messagesCoach")
    }catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  
  }

  const forgotPassword = async e =>{
    e.preventDefault()
    try{
      const form = e.target

      const userBody = {
        email: form.elements.email.value
      }
      await axios.post("http://localhost:3000/api/auth/forgot-password",userBody)
      toast.success("password resent link is sent, go check your email")
    }catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const resetPassword = async (e,token) =>{
    e.preventDefault()
    try{
      const form = e.target
      const password = form.elements.password.value
      const passwordConfirmation = form.elements.passwordConfirmation.value
      if (password !== passwordConfirmation) return toast.error("password is not matching")

      const userBody = {
        password
      }

      await axios.post(`http://localhost:3000/api/auth/reset-password/${token}`, userBody)
      navigate("/login")

    }catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }


  const forgotPasswordCoach = async e =>{
    e.preventDefault()
    try{
      const form = e.target

      const userBody = {
        email: form.elements.email.value
      }
      await axios.post("http://localhost:3000/api/coaches/forgot-password",userBody)
      toast.success("password resent link is sent, go check your email")
    }catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const resetPasswordCoach = async (e,token) =>{
    e.preventDefault()
    try{
      const form = e.target
      const password = form.elements.password.value
      const passwordConfirmation = form.elements.passwordConfirmation.value
      if (password !== passwordConfirmation) return toast.error("password is not matching")

      const userBody = {
        password
      }

      await axios.post(`http://localhost:3000/api/coaches/reset-password/${token}`, userBody)
      navigate("/loginCoach")

    }catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const logout = () => {
    localStorage.removeItem("token")
    
    setProfile(null)
    setAppointmentsCoach([])
    setMessages([])
    toast.success("logout success")
    navigate("/")
  }

  const store = {
    signUp,
    login,
    profile,
    logout,
    coaches,
    addAppointment,
    // editAppointment,
    deleteAppointment,
    signUpCoach,
    loginCoach,
    appointments,
    appointmentsCoach,
    addRating,
    // ratings,
    editProfile,
    editProfileCoach,
    addMessage,
    // editMessage,
    messages,
    deleteMessage,
    addComment,
    comments,
    editComment,
    deleteComment,
    forgotPassword,
    resetPassword,
    forgotPasswordCoach,
    resetPasswordCoach
  }
  return (
    <DrivingSchoolContext.Provider value={store}>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trafficInformation" element={<TrafficInformation/>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/coach/:coachId" element={<CoachOne />} />
        <Route path="/signupCoach" element={<SignUpCoach />} />
        <Route path="/loginCoach" element={<LoginCoach />} />
        <Route path="/profileCoach" element={<ProfileCoach />} />
        <Route path="/coaches" element={<Coaches/>}/>
        <Route path="/ratings" element={<Ratings/>}/>
        <Route path="/ratingsCoach" element={<RatingsCoach/>}/>
        <Route path="/messages" element={<Messages/>}/>
        <Route path="/messagesCoach" element={<MessagesCoach/>}/>
        <Route path="/appointmentsCoach" element={<AppointmentsCoach/>}/>
        <Route path="/appointments" element={<Appointments/>}/>
        <Route path="/coach/:coachId/appointmentsOne/:appointmentId" element={<AppointmentsOne/>}/>
        <Route path="/user/:userId/appointmentsCoach/:appointmentId" element={<AppointmentCoachOne/>}/>
        <Route path="/user/:userId/messagesCoach/:messageId" element={<MessageOne/>}/>
        <Route path="/user/:userId/messagesCoach/:messageId/comment/:commentId" element={<CommentOne/>}/>
        <Route path="/verify_email/:token" element={<EmailVerified/>}/>
        <Route path="/verify_email_coach/:token" element={<EmailVerifiedCoach/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/reset-password/:token" element={<ResetPassword/>}/>
        <Route path="/forgot-password-coach" element={<ForgotPasswordCoach/>}/>
        <Route path="/reset-password-coach/:token" element={<ResetPasswordCoach/>}/>
      </Routes>
    </DrivingSchoolContext.Provider>
  )
}

export default App
