import React from 'react';
import resume from '../Resume/res_img.png';
import profileimg from '../Images/profile_img.jpeg';


const ResumeButton = () => {
  const openResumePDF = () => {
    <img src={profileimg} className="profile-img-1"/>
  };

  return (
    <div>
      <button onClick={openResumePDF}>Open Resume PDF</button>
    </div>
  );
};

export default ResumeButton;
