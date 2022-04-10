  import React from 'react'
import SelectData from './SelectData'

  function Create() {
    return  (
      <div className='skapa'>
        <h1>Lägg till kurs</h1>
        <form>

          <label>Kursnamn</label>
                  <input 
                    type="text"
                    required
                  />
          <label>Ansvarig lärare</label>
            <SelectData />

          <label>Kurslängd</label>
          <select>
            <option value="52">52 veckor</option>
            <option value="40">40 veckor</option>
            <option value="20">20 veckor</option>
          </select>


          <textarea
          placeholder='Kursbeskrivning'
          required
          ></textarea>

        <input type="submit" value="Ny kurs"></input>
          



        </form>
        

      
      </div>
      

 
  )
}

export default Create



