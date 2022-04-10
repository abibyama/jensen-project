  import React, { useState } from 'react'
  import SelectData from './SelectData'

  function Create() {
    const [course, setCourse] = useState('')
    const [description, setDescription] = useState('')
    const [teacher, setTeacher] = useState('')
    const [weeks, setWeeks] = useState('52')
    return  (
      <div className='skapa'>
        <h1>Lägg till kurs</h1>
        <form>
          <label>Kursnamn</label>
                  <input 
                    type="text"
                    required
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                  />
          <label>Ansvarig lärare</label>
            <SelectData
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}/>

          <label>Kurslängd</label>
          <select
          value={weeks}
          onChange={(e) => setWeeks(e.target.value)}
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
        <button>Lägg till kurs</button>
          </form>
        

      
      </div>
      

 
  )
}

export default Create



