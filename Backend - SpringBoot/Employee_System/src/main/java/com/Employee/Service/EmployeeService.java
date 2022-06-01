package com.Employee.Service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.Employee.Entity.EmployeeEntity;
import com.Employee.Model.Employee;
import com.Employee.Repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository repo;
	
	public EmployeeRepository getRepo() {
		return repo;
	}
	

	public void setRepo(EmployeeRepository repo) {
		this.repo = repo;
	}


	public EmployeeEntity createEmployee(EmployeeEntity employee) {
		return repo.save(employee);
	}


	public List<EmployeeEntity> getAllEmployees() {
		return repo.findAll();
	}


	public boolean deleteEmployee(Long id) {
		EmployeeEntity employee = repo.findById(id).get();
		repo.delete(employee);
		return true;
	}


	public EmployeeEntity getEmployeeById(Long id) {
		return repo.findById(id).get();
	}


	public EmployeeEntity updateEmployee(Long id, Employee employee) {
		EmployeeEntity current_Employee = repo.findById(id).get();
		current_Employee.setEmailId(employee.getEmailId());
		current_Employee.setFirstName(employee.getFirstName());
		current_Employee.setLastName(employee.getLastName());
		
		return repo.save(current_Employee);
	}
	
}
