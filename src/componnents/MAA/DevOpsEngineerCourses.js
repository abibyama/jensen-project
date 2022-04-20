import React, { useState, useEffect } from 'react'

function DevOpsEngineerCourses() {
const [DevOpsEngineer, setDevOpsEngineer] = useState([]) 

useEffect(() => {
    async function getDevOpsEngineerCourses() {
        const response = await fetch("http://localhost:8080/DevOpsEngineer");
        const body = await response.json();
        setDevOpsEngineer(body.map(({ devOpsEngineerName }) => ({ label:  devOpsEngineerName , value: devOpsEngineerName })));
      }
      getDevOpsEngineerCourses();
    }, []);
  return (
    <div>
      <select>
  {DevOpsEngineer.map(({ label, value }) => (
    <option key={value} value={value}>
      {label}
    </option>
  ))}
</select>

    </div>
  )
}

export default DevOpsEngineerCourses