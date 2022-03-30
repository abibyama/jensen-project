import React from 'react'

const Ansökan = () => {
  return (
    <div className='ansökan'>
      <h1>Ansökan</h1>
      <p>Fyll i dina uppgifter och vilken utbildning du vill söka till</p>
      <form>

        <label>Förnamn</label>
                <input 
                  type="text"
                  required
                />

        <label>Efternamn</label>
                <input 
                  type="text"
                  required
                />

        <label>Email</label>
                <input 
                  type="text"
                  required
                />

        <label>Välj utbildning</label>
        <select>
          <option value="frontend">frontend</option>
          <option value="backend">backend</option>
          <option value="fullstack">fullstack</option>
        </select>


      </form>
      

     
    </div>
    

 
  )
}

export default Ansökan