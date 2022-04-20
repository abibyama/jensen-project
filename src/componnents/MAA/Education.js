import React, { useState, useEffect } from 'react'
import Education from '.Frontend/'
function Education() {
const [Frontend, setFrontend] = useState([]) 

useEffect(() => {
    async function getFrontend() {
        const response = await fetch("http://localhost:8080/teachers");
        const body = await response.json();
        setFrontend(body.map(({ frontendName}) => ({ label: frontendName , value: frontendName })));
      }
      getFrontend();
    }, []);
  return (
    <div>
      <select
      multiple ={true} >
  {Frontend.map(({ label, value }) => (
    <option key={value} value={value}>
      {label}
    </option>
  ))}
</select>

    </div>
  )
}

export default Education