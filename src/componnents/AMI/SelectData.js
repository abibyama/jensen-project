import React, { useState, useEffect } from 'react'
import axios from 'axios'

function SelectData() {
const [teachers, setTeachers] = useState([]) 

useEffect(() => {
    async function getTeachers() {
        const response = await fetch("http://localhost:8080/teachers");
        const body = await response.json();
        setTeachers(body.map(({ fullName }) => ({ label: fullName , value: fullName })));
      }
      getTeachers();
    }, []);
  return (
    <div>
      <select>
  {teachers.map(({ label, value }) => (
    <option key={value} value={value}>
      {label}
    </option>
  ))}
</select>

    </div>
  )
}

export default SelectData