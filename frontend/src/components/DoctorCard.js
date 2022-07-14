import axios from 'axios';
import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DoctorCard({id,name,aadhar, patientName, age, gender}) {
    const [submitted, setSubmitted] = useState(false);
    const goToPatient = (e) =>{
        e.preventDefault();
        setSubmitted(true);
        const postInfo = {
           doctorId: id,
           Name: patientName,
           Aadhar: aadhar,
           Age: age,
           Gender: gender
        }
        axios.post('http://decentrahealth-server.herokuapp.com/addPatientDoctor', postInfo)
        .then(function (response){
            console.log(response);
            if(response.status === 200){
                alert("Patient assigned to doctor!");
            }
      });
  }

return(
  <>
    <td>{id}</td>
    <td>{name}</td>
    <td>{aadhar}</td>
    <td>{patientName}</td>
    <td>{age}</td>
    <td>{gender}</td>
    <button className="btn btn-primary" onClick={goToPatient} style={{ color: "white", backgroundColor: "Blue", margin: "0px 5px 5px 50px" }}>Submit</button>
  </> 
)}

export default DoctorCard