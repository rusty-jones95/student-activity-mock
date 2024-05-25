var studentList = {"students": [
    {
        "firstName": "Student1",
        "lastName": "Student1",
        "emailAddress": "student1.student1@collin.edu",
        "course": "COSC2450",
        "activity": "Sent Message to Professor",
        "activityDate": "05-24-2024"
    }
]};

for (var i = 2; i <= 500; i++) {
    var student = {
        "firstName": "Student" + i,
        "lastName": "Student" + i,
        "emailAddress": "student" + i + ".student" + i + "@collin.edu",
        "course": "COSC245" + i,
        "activity": "Sent Message to Professor",
        "activityDate": "05-24-2024"
    };
    studentList.students.push(student);
}

console.log(JSON.stringify(studentList));