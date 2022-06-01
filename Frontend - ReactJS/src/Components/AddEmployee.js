import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './CSS Components/AddEmployee.css'
import EmployeeService from './Services/EmployeeService';

const AddEmployee = () => {
    const[employee, setEmployee] = useState({
        id:"",
        firstName:"",
        lastName:"",
        emailId:""
    }); 

    const navigate = useNavigate();

    const handleChange = (e) =>{
        const value = e.target.value;
        setEmployee({...employee,[e.target.name]: value})
    }

    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id:"",
            firstName:"",
            lastName:"",
            emailId:""
        })
    }

    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee)
        .then((response) => {
            console.log(response);
            navigate("/EmployeeList")
        })
        .catch((error) => {
            console.log(error); 
        })
    }

  return (
    <div className='login__Input'>
        <div className='login_Info'>
            <div className='login_AddEmployee'>
                Add New Employee
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
                onClick={saveEmployee}
                className='login__Submit' >Submit</button>
                <button
                onClick={reset} 
                className='login__Clear' >Clear</button>
            </div>
        </div>
    </div>
  )
}

export default AddEmployee