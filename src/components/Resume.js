import '../CssStykes/Profile.css';

export default function Resume(){
    return (
        <div className="resume-container">
          <h1>Harish Kammala</h1>
          <p>Email: <a href="mailto:kammalaharish@gmail.com">kammalaharish23@gmail.com</a></p>
          <p>Phone: +91 9347779216</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/harish-kammala-425a811b0/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
          <h2>Education</h2>
          <table>
            <tr>
              <th>Degree</th>
              <th>College</th>
              <th>year</th>
              <th>Percentage</th>
              </tr>
              <tr>
              <td>B.Tech</td>
              <td>Madanapalle Institute of Technology and Science</td>
              <td>2019-23</td>
              <td>83.7</td>
            </tr>
            <tr>
              <td>Intermediate</td>
              <td>Sri Chaitanya J.R College, Tirupathi</td>
              <td>2017-2019</td>
              <td>98.8</td>
            </tr>
            <tr>
              <td>SSC</td>
              <td>Masthan Vignan EM High School</td>
              <td>2016-2017</td>
              <td>97.0</td>
            </tr>
          </table>
          
          
          
          
    
          <h2>Skills</h2>
          <ul>
            <li><strong>Programming Languages</strong>: Java (OOPs, Exception Handling, Core Java, Collection Framework, Spring Boot), Python (OOPs, Programming)</li>
            <li><strong>Web Technologies</strong>: HTML, CSS, React</li>
            <li><strong>Databases</strong>: MySQL</li>
          </ul>
    
          <h2>Area Of Interest</h2>
          <ul>
            <li>Backend Development</li>
            <li>Programming</li>
            <li>Full Stack Development</li>
          </ul>
    
          <h2>Projects</h2>
          <h3>Bus Trading System</h3>
          <ul>
            <li>Tools & Technologies: HTML, CSS, React, Spring Boot, MySQL</li>
            <li>My Role: Backend Developer</li>
          </ul>
    
          <h3>Digital Library</h3>
          <ul>
            <li>Tools & Technologies: HTML, CSS, React, Spring Boot, MySQL</li>
            <li>My Role: Backend Developer</li>
          </ul>
    
          <h3>Quiz Application</h3>
          <ul>
            <li>Tools & Technologies: HTML, CSS, React, Spring Boot, MySQL</li>
            <li>My Role: Backend Developer</li>
          </ul>
        </div>
      );
}