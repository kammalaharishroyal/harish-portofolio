export default function Resume(){
    return(
        <div className="resume-body">

    <div className="resume-container">
        <h2>My Resume</h2>

        <div class="resume-personal-info">
            <h3>Personal Information</h3>
            <p>Name: Harish kammla</p>
            <p>Email: kammalaharish@gmail.com</p>
            <p>Phone: +91 9347779216</p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/harish-kammala-425a811b0/" target="_blank">CLick here</a></p>
        </div>

        <div className="resume-education">
            <h3>Education</h3>
            <ul>
                <li>
                    <p><strong>Madanapalle Institute of Technology and science</strong></p>
                    <p>Degree: Bachelor of Technology in Computer Science</p>
                    <p>Year: 2019-2023</p>
                    <p>Percentage: 83.7%</p>
                    
                </li>
                <li>
                    <p><strong>Sri Chaitanya j.r college,Tirupathi</strong></p>
                    <p>Degree: Intermediate/12</p>
                    <p>Year: 2017-2019</p>
                    <p>Percentage:98%</p>
                    
                </li>
                <li>
                    <p><strong>Masthan vignan Em High school</strong></p>
                    <p>Degree:SSC/10</p>
                    <p>Year: 2016-2017</p>
                    <p>Percentage:97%</p>
                    
                </li>
                
            </ul>
        </div>

        

        <div className="resume-skills">
            <h3>Skills</h3>
            <ul>
                <li>Programming Languages: Java, Python, JavaScript</li>
                <li>Web Technologies: HTML, CSS, React</li>
                <li>Databases: MySQL</li>
               
            </ul>
        </div>
        
    </div>
</div>

    )
}