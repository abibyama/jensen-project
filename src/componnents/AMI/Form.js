  import React from 'react'

  function Form() {
    return  (
      <div className='ansökan'>
        <h1>Lägg till kurs</h1>
        <form>

          <label>Kursnamn</label>
                  <input 
                    type="text"
                    required
                  />
          <label>Ansvarig lärare</label>
          <select>
            <option value="Mohammad Ali">Mohammad Ali</option>
            <option value="Per T">Per T</option>
            <option value="Mohamed Abdi Ali">Mohamed Abdi Ali</option>
          </select>

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

export default Form



