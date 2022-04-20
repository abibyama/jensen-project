import React from 'react'

function Frontend() {
const [FrontendName, setFrontendName] = useState([Frontend]) 

useEffect(() => {
    async function getFrontend() {
        const response = await fetch("http://localhost:8080/Frontend");
        const body = await response.json();
        setFrontendName(body.map(({ FrontendName }) => ({ label: FrontendName , value: FrontendName })));
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

export default Frontend
