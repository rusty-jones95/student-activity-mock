var studentList = {"students": []};

for (var i = 1; i <= 500; i++) {
    var studentActivity;
    if (i <= 100) {
        studentActivity = 'Answered Discussion Question';
    } else if (i > 100 && i <= 220) {
        studentActivity = 'Sent Message to Professor';
    } else if (i > 120 && i <= 352) {
        studentActivity = 'Submitted Test';
    } else if (i > 352) {
        studentActivity = 'Checked Grades';
    }
    var student = {
        "firstName": "Student" + i,
        "lastName": "Student" + i,
        "emailAddress": "student" + i + ".student" + i + "@collin.edu",
        "course": "COSC245" + i,
        "activity": studentActivity,
        "activityDate": "05-24-2024"
    };
    studentList.students.push(student);
}

console.log(JSON.stringify(studentList));