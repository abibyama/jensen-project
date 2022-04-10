import React, { useState, useEffect } from 'react'

function CourseSelect() {
const [program, setProgram] = useState([]) 

useEffect(() => {
    async function getProgram() {
        const response = await fetch("http://localhost:8080/courses");
        const body = await response.json();
        setProgram(body.map(({ education }) => ({ label: education , value: education })));
      }
      getProgram();
    }, []);
  return (
    <div>
      <select>
  {program.map(({ label, value }) => (
    <option key={value} value={value}>
      {label}
    </option>
  ))}
</select>

    </div>
  )
}

export default CourseSelect