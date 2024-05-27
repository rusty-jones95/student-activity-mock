package com.collin.student.activity.controller;

import com.collin.student.activity.pojo.Student;
import com.collin.student.activity.service.CSVGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
public class StudentActivityController {
    @Autowired
    CSVGenerator csvGenerator;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/generateCSVReport")
    public int generateCSVReport(@RequestBody List<Student> students) {
        try {
            csvGenerator.generateCSVFile(students);
        } catch (IOException e) {
            System.out.println("Error returned from generateCSVFile " + e);
        }

        return 200;
    }
}
