import java from '../Images/java.png';
import python from '../Images/python.jpeg';
import html from '../Images/html.png';
import css from '../Images/css.png';
import react from '../Images/react.png';
import springboot from '../Images/springboot.png';
import mysql from '../Images/mysql.png';
export default function Skills(){
    return(
      <>
      <div className="skill-body">

    <div class="skill-container">
        <h2>My Skills</h2>

        <div class="skills-container">
            <div class="skills-category">
                <h3>Programming Languages</h3>
                <ul class="skills-list">
                    <li class="skills-list-item"><img src={java} alt="Programming Language 1"/></li>
                    <li class="skills-list-item"><img src={python} alt="Programming Language 2"/></li>
                   
                
                </ul>
            </div>

            <div class="skills-category">
                <h3>Frontend Languages</h3>
                <ul class="skills-list">
                    <li class="skills-list-item"><img src={html} alt="Frontend Language 1"/></li>
                    <li class="skills-list-item"><img src={react} alt="Frontend Language 2"/></li>
                    <li class="skills-list-item"><img src={css} alt="Frontend Language 2"/></li>
                    
                </ul>
            </div>

            <div class="skills-category">
                <h3>Backend Languages</h3>
                <ul class="skills-list">
                    <li class="skills-list-item"><img src={java} alt="Backend Language 1"/></li>
                    <li class="skills-list-item"><img src={springboot} alt="Backend Language 2"/></li>
                    
                </ul>
            </div>
            <div class="skills-category">
                <h3>DataBase Languages</h3>
                <ul class="skills-list">
                    <li class="skills-list-item"><img src={mysql} alt="Backend Language 1"/></li>
                   
                    
                </ul>
            </div>
        </div>
    </div>
    </div>
      </>
    )
}