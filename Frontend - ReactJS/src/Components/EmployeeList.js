import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CSS Components/EmployeeList.css'
import Employee from './Employee';
import EmployeeService from './Services/EmployeeService';

const EmployeeList = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await EmployeeService.getEmployees();
                // console.log(`Hello ${response.data}`)
                setEmployees(response.data);
            }catch(error){
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, [])

    const deleteEmployee = (e,id) => { 
        e.preventDefault();
        EmployeeService.deleteEmployee(id)
        .then((res) => {
            if(employees){
                setEmployees((prevElement) => {
                    return prevElement.filter((employee) => employee.id !== id)
                })
            }
        } )
    }
  return (
    <div className='employee__List'>
        <div className='employee__Add'>
            <button 
            onClick={() => navigate("/addEmployee")}
            className='employee_AddButton'>
                Add New Employee
            </button>
        </div>
        <div className='employee__FullList'>
            <table>
                <thead className='table__Head'>
                    <tr>
                        <th className='tr__Firstname'>First Name</th>
                        <th className='tr__Lastname'>Last Name</th>
                        <th className='tr__Emailid'>Email ID</th>
                        <th className='tr__Actions'>Actions</th>
                    </tr>
                </thead>
                {!loading && (
                    <tbody className='table__Body'>
                        {employees.map((employee) => (
                            <Employee 
                            employee={employee} 
                            deleteEmployee={deleteEmployee}
                            key={employee.id}/>
                        ))}
                    </tbody>
                )}
            </table>
        </div>
    </div>
    )
}

export default EmployeeList;