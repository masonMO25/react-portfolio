import React from 'react';
import githubIcon from '../assets/github_icon.jpg';
import linkedInIcon from '../assets/linkedin_icon.jpg';


function Footer() {
    return (
        <section id="footer" className="d-flex justify-content-center">
            <div id="icons" className="text-center">
                <a href="https://github.com/masonMO25">
                    <img src={githubIcon} alt="github icon"/>
                </a>
        
                <a href="https://www.linkedin.com/in/mason-neale-8074b5262/">
                    <img src={linkedInIcon} alt="linkedIn icon"/>
                </a>
            </div>
        </section>
    );
};

export default Footer;