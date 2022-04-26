  import React, { useState } from 'react'
  import SelectData from './SelectData'

  function Create() {
    const [courseName, setCourseName] = useState('')
    const [description, setDescription] = useState('')
    const [courseLength, setCourseLength] = useState('52')

    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Kursen är tillagt!")
      const course = {courseName, SelectData, courseLength, description };
      console.log(course)
    }

    return  (
      <div className='skapa'>
        <h1>Lägg till kurs</h1>
        <form onSubmit={handleSubmit}>
          <label>Kursnamn</label>
                  <input 
                    type="text"
                    required
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                  />
          <label>Ansvarig lärare</label>
            <SelectData />
          <label>Kurslängd</label>
          <select
          value={courseLength}
          onChange={(e) => setCourseLength(e.target.value)}
          >
            <option value="52">52 veckor</option>
            <option value="40">40 veckor</option>
            <option value="20">20 veckor</option>
          </select>

          <textarea
          placeholder='Kursbeskrivning'
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        <button type='submit'>Lägg till kurs</button>
          </form>
        

      
      </div>
      

 
  )
}

export default Create



