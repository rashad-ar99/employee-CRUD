import React from 'react'
import { useNavigate } from 'react-router-dom'
import './CSS Components/Employee.css'

const Employee = ({employee, deleteEmployee}) => {
  const navigate = useNavigate();
  
  const editEmployee = (e, id) => {
      e.preventDefault();
      navigate(`/editEmployee/${id}`)
  }
  return (
    <tr key={employee.id}>
        <td className='employee__FirstName'>{employee.firstName}</td>
        <td className='employee__LastName'>{employee.lastName}</td>
        <td className='employee__Email'>{employee.emailId}</td>
        <td className='employee__Actions'>
            <a className='edit__Button' 
              onClick={(e,id) => editEmployee(e, employee.id)}>Edit</a>
            <a className='delete__Button' 
              onClick={(e,id) => deleteEmployee(e, employee.id)}>Delete</a>
        </td>
    </tr>
  )
}

export default Employee