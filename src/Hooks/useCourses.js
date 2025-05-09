import { useEffect, useState } from "react"


const useCourses = () =>{
    const [courses, setCourses] = useState([])

    const a = 200;

    useEffect(() => {
        fetch("/Course-Data/Courses.json")
          .then((res) => res.json())
          .then((data) => setCourses(data));
      }, []);


    return {courses,a }
  
}

export default useCourses;