    import React from 'react'
import KursLista from './KursLista'
    import Lista from './Lista'
    import utbildningLista from './utbildningLista'

    function education (educationList){
      return (
        <div>
        <Lista 
        key={educationList.id}
        name={educationList.name}
        description={educationList.description}
        />
        <KursLista />
        </div>
      )
    }


    function Utbildningar () {
      return (
        <div >
          <h1>Utbildningar</h1>
          {utbildningLista.map(education)}
        
        </div>
        

    
      )
    }

    export default Utbildningar
