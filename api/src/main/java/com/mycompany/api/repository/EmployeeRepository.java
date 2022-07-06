package com.mycompany.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.mycompany.api.model.Employee;

@Repository
public interface EmployeeRepository extends MongoRepository<Employee, String>{
    public abstract Employee findByEmailAndPassword(String Email, String Password);
}
