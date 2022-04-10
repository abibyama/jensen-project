import React, { useState } from 'react'
import CourseSelect from './CourseSelect';

const Ansökan = () => {
 const [nameValue, setNameValue] = useState("");
    const [lastNameValue, setLastNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");  
    return (
   
    <div className='ansökan'>
      <h1>Ansökan</h1>
      <p>Fyll i dina uppgifter och vilken utbildning du vill söka till</p>
      <form>



        <label>Förnamn</label>
                <input 
                  type="text"
                  value={nameValue}
                  onChange ={(e) => setNameValue(e.target.value)}
                  required
                />

        <label>Efternamn</label>
                <input 
                  type="text"
                  value={lastNameValue}
                  onChange ={(e) => setLastNameValue(e.target.value)}
                  required
                />

        <label>Email</label>
                <input 
                  type="text"
                  value= {emailValue}
                  onChange ={(e) => setEmailValue(e.target.value)}
                  required
                />

        <label>Välj utbildning</label>
       <CourseSelect />

        <input type="submit" value="Ansök"></input>
        {/* <button type="button" onClick={ButtonClick}>Add data</button> */}



      </form>
      

     
    </div>
    

 
  )
}

export default Ansökan