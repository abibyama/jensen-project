

 import React, { useState, useEffect } from 'react'

 function Build() {
 const [teachers, setTeachers] = useState([]) 
 
 useEffect(() => {
     async function getTeachers() {
         const response = await fetch("http://localhost:8080/teachers");
         const body = await response.json();
         setTeachers(body.map(({ frontendName }) => ({ label: frontendName , value: frontendName })));
       }
       getTeachers();
     }, []);
   return (
     <div>
       <select
       multiple ={true} >
   {teachers.map(({ label, value }) => (
     <option key={value} value={value}>
       {label}
     </option>
   ))}
 </select>
 
     </div>
   )
 }
 
 export default Build