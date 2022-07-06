package com.mycompany.api.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mycompany.api.JWT.JWT;
import com.mycompany.api.model.Employee;
import com.mycompany.api.service.EmployeeService;

@RestController
@RequestMapping("/employees")
public class EmployeeController {
    
    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private JWT jwt;

    @PostMapping()
    public Employee registrarEmpleado(@RequestBody Employee employee) {
        return employeeService.registrarEmpleado(employee);
    }

    @GetMapping()
    public List<Employee> obtenerEmpleados(@RequestHeader(value = "token") String token) {
        if(jwt.getKey(token) == null) {
            return new ArrayList<>();
        }

        return employeeService.obtenerEmpleados();
    }

    @PostMapping("/login")
    public String login(@RequestParam("email") String email, @RequestParam("password") String password) {
        Employee employee = employeeService.login(email, password);

        if(employee != null) {
            return jwt.create(employee.getDocument(), employee.getEmail());
        }

        return "FAIL";
    }
}
