import "./About.css"
import Hole from "../../ui/Hole"
import { skills } from '../../data'
import CardUi from "../../assets/CardUi"
const About = () => {
  return (
    <section id = "about">
      <div className='card section__wrapper'>
        <Hole />
        <div className="column left__column">
          <h3 className="skill__title">My Skills</h3>
          <div className="skills__container">
            {skills.map((skill, index)=>(
              <div className="flex skill__group" key={index}>
                {skill.data.map((list, key)=>(
                  <div className="blur__overlay flex__center skill" key={key}>
                    <div className="skill__logo">
                      <img src={list.logo} alt="" />
                    </div>
                  </div>
            ))}
              </div>
            ))}
          </div>
          <CardUi className="card__ui-item" color={"var(--color-primary)"}/>
        </div>
        <div className="column right-column">
          <h2 className="shine">About Me</h2>
          <h1 className="tittle">
            I am <span className="color__primary">Elvis Fabian</span>
          </h1>
          <p className="text__muted description">
            I am a Full-Stack Developer and Creative Director who bridges the gap between robust, scalable architecture and pixel-perfect design. From engineering high-performance web applications to crafting cinematic visual content, I build immersive digital experiences that are as functional under the hood as they are captivating on the screen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About

