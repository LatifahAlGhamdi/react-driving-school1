import {AiFillCar} from "react-icons/ai"
import {GiTruck} from "react-icons/gi"
import {FaMotorcycle} from "react-icons/fa"
function TrafficInformation() {
    return (  
        <>
    <div className="traffic-instructions">
    <div className="content-trafficInformation">
    <h2 style={{fontSize:"50px",marginTop:"40px", marginLeft:"150px"}}>Traffic Information</h2>
    
    <div className="cards">

   
    <div className="cardd-trafficInformation">
        <h4><AiFillCar style={{fontSize:"40px"}}/> private driving </h4>
        <ol>
            <li>The applicant must be 18 years or older</li>
            <li>Performing a medical examination</li>
            <li>A copy of the identity as follows:</li>
            <p>Citizens: Bring a copy of your ID card</p>
            <p>Residents: A copy of the residence</p>
            <li>Bring 6 photos (4×6 cm)</li>
            <li>Pay the prescribed fees</li>
            <li>Bring a file to save papers</li>
        </ol>
    </div>
   

   
    <div className="cardd-trafficInformation">
        <h4><GiTruck style={{fontSize:"40px"}}/> Driving heavy equipment and machinery</h4>
        <ol>
            <li>Complete the form data</li>
            <li>Bring 4 photos (4×6 cm)</li>
            <li>Definition from an official body</li>
            <li>Pay the prescribed fees</li>
            <li>Bring a file to save papers</li>
            <p>for non-citizens</p>
            <li>Definition from the certified sponsor</li>
            <li>The profession, upon obtaining the license, should be one of the professions that authorizes the leadership of this category</li>
        </ol>
    </div>
  

    
    <div className="cardd-trafficInformation">
        <h4><FaMotorcycle style={{fontSize:"40px"}}/> Motorbike driving</h4>
        <ol>
            <li>The applicant must be 16 years or older</li>
            <li>Complete the form data</li>
            <li>Bring 4 photos (4×6 cm)</li>
            <li>A copy of the identity as follows:</li>
            <p>Citizens: Bring a copy of your ID card</p>
            <p>Residents: Copy of residence permit and passport</p>
            <li>Written permission from the guardian</li>
            <li>Pay the prescribed fees</li>
            <li>A scene of good conduct and behavior from an official body</li>
            <li>Definition of certified</li>
            <li>Bring a file to save papers</li>
        </ol>
    </div>
    

    
    <div className="cardd-trafficInformation">
        <h4><AiFillCar style={{fontSize:"40px"}}/> Private driving temporary</h4>
        <ol>
            <li>Being 17 years old</li>
            <li>Performing a medical examination</li>
            <li>Bring 6 photos (4×6 cm)</li>
            <li>A copy of the identity as follows:</li>
            <p>Citizens: ID card</p>
            <p>Citizens of the Cooperation Council countries: A copy of the passport, and three months have passed since entering the Kingdom without travel</p>
            <p>Residents: A copy of the residence</p>
            <li>Attach a letter with the consent of the guardian or sponsor</li>
            <li>Bring a file to save papers</li>
        </ol>
    </div>
  

    </div>
  
    </div>
   
    </div>
    <img src="https://saysedds.tu.edu.sa/StudentAR/assets/img/l4.jpg" alt="" style={{height:"50px", width:"100%",objectFit:"cover"}}/>
    </>
    );
}

export default TrafficInformation;