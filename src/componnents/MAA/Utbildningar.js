    import React from 'react'
    import Lista from './Lista'
    import utbildningLista from './utbildningLista'
    import CourseInfo from './FrontEndCourses'
   
   
    function education (educationList){
      return (
        <div>
        <Lista 
        key={educationList.id}
        name={educationList.name}
        description={educationList.description}
        class={education}
        />
       <CourseInfo />
       

      
       
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
