import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from './Services/EmployeeService';
import './CSS Components/UpdateEmployee.css'
import Employee from './Employee';

const UpdateEmployee = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    const [employee, setEmployee] = useState({
        id: id,
        firstName:"",
        lastName:"",
        emailId:""
    })

    useEffect(() => {
        const fetchData = async () => {
            try{    
                const response = await EmployeeService.getEmployeebyId(id);
                // console.log(`Hello ${response.data}`)
                setEmployee(response.data);
            }catch(error){
                console.log(error);
            }
        }
        fetchData();
    }, [])

    const updateEmployee = (e) =>{
        e.preventDefault();
        EmployeeService.updateEmployee(employee,id)
        .then((response) => {
            navigate("/EmployeeList")
        })
        .catch((error => {
            console.log(error)
        }))
    }

    const handleChange = (e) =>{
        const value = e.target.value;
        setEmployee({...employee,[e.target.name]: value})
    }

    
  return (
    <div className='update__Input'>
        <div className='login_Info'>
            <div className='login_AddEmployee'>
                Update Employee
            </div>
            <div className='login__Details'>

                <label className='login_DetailsFirstName'>
                    First Name
                </label>
                <input 
                name="firstName"
                value={employee.firstName}
                onChange={(e) => handleChange(e)}
                className='login__InputFirstName' type='text' />
                
                <label className='login_DetailsLastName'>
                    Last Name
                </label>
                <input
                name='lastName'
                value={employee.lastName}
                onChange={(e) => handleChange(e)}
                className='login_InputLastName' type='text' />

                <label className='login__DetailsEmail'>
                    Email
                </label>
                <input 
                name='emailId'
                value={employee.emailId}
                onChange={(e) => handleChange(e)}
                className='login_InputEmail' type='text' />

                <br></br>
                <button 
                onClick={updateEmployee}
                className='login__Submit' >Update</button>
                <button
                onClick={() => navigate("/EmployeeList")} 
                className='login__Clear' >Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default UpdateEmployee