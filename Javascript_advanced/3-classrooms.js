function createClassRoom (numOfStudents) {
  function studentSeat (seat)
  {
    return () => seat;
  }
  
  let students = [];
  for(student = 0; student < numOfStudents; student++){
    students[student] = studentSeat(student + 1);
  }
  return students;
}

var classRoom = createClassRoom(10);

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());