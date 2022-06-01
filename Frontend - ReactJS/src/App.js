import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './Components/AddEmployee.js';
import EmployeeList from './Components/EmployeeList';
import Navbar from './Components/Navbar.js'
import UpdateEmployee from './Components/UpdateEmployee';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<EmployeeList />} />
        <Route path='/' element={<EmployeeList />}/>
        <Route path='/EmployeeList' element={<EmployeeList />}/>
        <Route path='/addEmployee' element={<AddEmployee />}/>  
        <Route path='/editEmployee/:id' element={<UpdateEmployee />}></Route>    
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
