package com.mycompany.api.service;

import java.nio.charset.StandardCharsets;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.common.hash.Hashing;
import com.mycompany.api.model.Employee;
import com.mycompany.api.repository.EmployeeRepository;

@Service
public class EmployeeService {
    
    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee registrarEmpleado(Employee employee) {
        employee.setPassword(Hashing.sha256().hashString(employee.getPassword(), StandardCharsets.UTF_8).toString());

        return employeeRepository.insert(employee);
    }

    public List<Employee> obtenerEmpleados() {
        return employeeRepository.findAll();
    }

    public Employee login(String email, String password) {
        return employeeRepository.findByEmailAndPassword(email, Hashing.sha256().hashString(password, StandardCharsets.UTF_8).toString());
    }
}
