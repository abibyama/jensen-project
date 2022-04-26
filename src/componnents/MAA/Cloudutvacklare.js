import React, { useState, useEffect } from 'react'


function Cloudutvacklare() {
const [Cloudutvacklare, setCloudutvacklare] = useState([]) 

useEffect(() => {
    async function getCloudutvacklare() {
        const response = await fetch("http://localhost:8080/Cloudutvacklare");
        const body = await response.json();
        setCloudutvacklare(body.map(({cloudutvacklareName}) => ({ label: cloudutvacklareName , value: cloudutvacklareName })));
      }
      getCloudutvacklare();
    }, []);
  return (
    <div>
      <select
      multiple ={true} >
  { Cloudutvacklare.map(({ label, value }) => (
    <option key={value} value={value}>
      {label}
    </option>
  ))}
</select>

    </div>
  )
}

export default Cloudutvacklare