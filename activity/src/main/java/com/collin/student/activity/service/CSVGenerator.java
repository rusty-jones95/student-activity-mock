package com.collin.student.activity.service;

import com.collin.student.activity.pojo.Student;
import com.opencsv.CSVWriter;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Component
public class CSVGenerator {
    public void generateCSVFile(List<Student> students) throws IOException {
        File file = new File("src/main/resources/StudentActivity.csv");
        file.createNewFile();

        try(FileWriter outputFile = new FileWriter(file)) {
            CSVWriter csvWriter = new CSVWriter(outputFile);

            List<String[]> studentData = new ArrayList<String[]>();
            studentData.add(new String[] { "First Name", "Last Name", "Email Address", "Course",  "Activity", "Activity Date"});
            for (Student student: students) {
                studentData.add(new String[] { student.getFirstName(), student.getLastName(), student.getEmailAddress(),
                                                student.getCourse(), student.getActivity(), student.getActivityDate()});
            }

            csvWriter.writeAll(studentData);
            csvWriter.close();
        } catch (IOException e) {
            System.out.println("Error writing to CSV file " + e.getMessage());
        }
    }

}
