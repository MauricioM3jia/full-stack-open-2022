import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Courses =({courses})=>{
    return(
    <>
      {courses.map(course=>
        <>  
             <Header key={course.id} head={course.name}/>
             <Content parts={course.parts}/>
             <Total parts={course.parts}/>
        </>
        )}
   
    </>
    )
  }
export default Courses;