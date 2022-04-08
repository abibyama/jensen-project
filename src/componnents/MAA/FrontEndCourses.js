import React, { useState, useEffect } from 'react'

function FrontEndCourses() {
const [frontend, setFrontend] = useState([]) 

useEffect(() => {
    async function getCourseInfo() {
        const response = await fetch("http://localhost:8080/frontend");
        const body = await response.json();
        setFrontend(body.map(({ frontendName }) => ({ label: frontendName , value:frontendName })));
      }
      getCourseInfo();
    }, []);
  return (
    <div>
      <select>
  {frontend.map(({ label, value }) => (
    <option key={value} value={value}>
      {label}
    </option>
  ))}
</select>

    </div>
  )
}

export default FrontEndCourses