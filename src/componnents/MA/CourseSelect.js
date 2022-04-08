import React, { useState, useEffect } from 'react'

function CourseSelect() {
const [courses, setCourses] = useState([]) 

useEffect(() => {
    async function getCourses() {
        const response = await fetch("http://localhost:8080/courses");
        const body = await response.json();
        setCourses(body.map(({ courseName }) => ({ label: courseName , value: courseName })));
      }
      getCourses();
    }, []);
  return (
    <div>
      <select>
  {courses.map(({ label, value }) => (
    <option key={value} value={value}>
      {label}
    </option>
  ))}
</select>

    </div>
  )
}

export default CourseSelect