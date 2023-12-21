import { NavLink, Outlet } from "react-router-dom";
import profileimg from '../Images/profile_img.jpeg';
import git from '../Images/git.png';
import instagram from '../Images/instagram.jpeg';
import leetcode from '../Images/leetcode.png';
import linkedin from '../Images/linkedin.png';
import '../CssStykes/Profile.css';


export default function HeaderHome(){
    return(
        <>
        <div className="total">
        <div className="profile">
        <div className="profile-img">
            <img src={profileimg} className="profile-img-1"/>
        </div>
        <hr/>
        <div className="profile-name">
            <h1>Harish kammala</h1>
        </div>
        <div>
          
           

        <hr/>
        <h1>Who Am I</h1>
        <h3>Computer Science Student</h3>
       <div className="whoami-content">
       <label><h3>Branch:CSE</h3></label>
        <label><h3>Course:B.Tech</h3></label>
        <label><h3>Batch:2023</h3></label>
        <label><h3>College:<a href="https://mits.ac.in/">Mits</a></h3></label>
</div>
       
        <hr/>
        </div>
        </div>
        <div className="objective">
            <h1>Career Objective</h1>
            <p className="objective-paragraph">Goal-oriented individual with a B tech seeking entry level specialized with a computer science engineering To place in a company to develop it with my skills and knowledge.   </p>

        </div>
        <hr/>
        <div class="container">
        <h2>Connect with Me</h2>

        <div class="social-icons">
            <div class="social-icon">
                <a href="https://github.com/kammalaharishroyal" target="_blank">
                    <img src={git} alt="GitHub"/>
                </a>
            </div>

            <div class="social-icon">
                <a href="https://www.linkedin.com/in/harish-kammala-425a811b0/" target="_blank">
                    <img src={linkedin} alt="LinkedIn"/>
                </a>
            </div>

            <div class="social-icon">
                <a href="https://leetcode.com/kammalaharish/" target="_blank">
                    <img src={leetcode} alt="leetcode"/>
                </a>
            </div>
            <div class="social-icon">
                <a href="https://www.instagram.com/harishroyal_kammala_/" target="_blank">
                    <img src={instagram} alt="instagram"/>
                </a>
            </div>
        </div>
    </div>
    <hr/>

        <div className="tittles">
        <NavLink to={'projects'}><strong><h1>Projects</h1></strong></NavLink>
        <NavLink to={'resume'}><strong><h1>Resume</h1></strong></NavLink>
        <NavLink to={'skills'}><strong><h1>Skills</h1></strong></NavLink>
        <NavLink to={'about'}><strong><h1>About</h1></strong></NavLink>
        </div>
        <hr/>
        <Outlet/>
        
        </div>
        </>

    )
}