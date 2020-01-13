package com.cts.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.employee.dao.EmployeeDao;
import com.cts.employee.entity.Employee;

@RestController
@RequestMapping("api/employees")
@CrossOrigin
public class EmployeeController {
	
	@Autowired
	private EmployeeDao empDao;
	
	@GetMapping
	public List<Employee> listAll() {
		
		return empDao.findAll();
	}

}
