import React from 'react'
import Lista from './Lista'
import utbildningLista from './utbildningLista'
import FrontEndCourses from './FrontEndCourses'
import DevOpsEngineerCourses from './DevOpsEngineerCourses'
import Cloudutvacklare from './Cloudutvacklare'

    function education (educationList){
      return (
        <div>
        <Lista 
        key={educationList.id}
        name={educationList.name}
        description={educationList.description}
        class={education}
        />
      
        
       
        </div>
      )
    }


    function Utbildningar () {
      return (
        <div >
          <h1>Utbildningar</h1>
          {utbildningLista.map(education)}

          <h2>Vårar kurser</h2>
          <h3>Frontend</h3>
          <FrontEndCourses />
        <h3>Dev Ops Engineer</h3>
        <DevOpsEngineerCourses />
        <h3>Cloudutvacklar</h3>
        <Cloudutvacklare />


        </div>
        

    
      )
    }

    export default Utbildningar