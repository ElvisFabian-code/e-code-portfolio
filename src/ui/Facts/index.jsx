import { useState, useEffect } from "react"
import  "./Facts.css"
import Odometer from "react-odometerjs"
import "odometer/themes/odometer-theme-default.css"

const Facts = () => {
    const [experience, setExpereince] = useState(0)
    const [project, setProject] = useState(0)

    useEffect(()=> {
        const timeoutId = setTimeout(() =>{
            setExpereince(1);
            setProject(11);
        },3000);

        return () => clearTimeout(timeoutId);
    },[]);

  return (
    <div className="flex__center fact__container">
        <div className="fact__item">
            <div className="flex__center">
                <Odometer value={experience} className="title" />
                <h3 className="title">+</h3>
            </div>
          <p className="label">Years of Experience</p>  
        </div>

        <div className="fact__item">
            <div className="flex__center">
                <Odometer value={project} className="title" />
                <h3 className="title">+</h3>
            </div>
          <p className="label">Completed Project</p>  
        </div>
    </div>
  )
}

export default Facts
