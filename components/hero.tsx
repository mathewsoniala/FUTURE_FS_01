import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import grimore from '../public/Wallpaper/Lukuh.jpg'
import Image from 'next/image'

function Hero() {
  return (
    <div id="home">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-image">
            <Image src={grimore} alt="Mathews Oniala" />
          </div>

          <div className="hero-content">
            <div className="hero-symbol">☆☆☆☆</div>
            <h1 className="hero-name">Mathews Oniala</h1>
            <p className="hero-headline">
              Engineering interfaces that feel invisible — <br />
              and systems that never break.
            </p>
            <div className="hero-trust">
              <span>2+ years</span> • <span>Full-Stack Engineer</span> • <span>20+ projects</span>
            </div>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">See live work →</a>
              <a href="#" className="btn-secondary">Resume (PDF)</a>
            </div>
            <div className="hero-social">
              <a href="#"><FontAwesomeIcon icon={faGithub} /> GitHub</a>  •  
              <a href="#"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>  •  
              <a href="#"><FontAwesomeIcon icon={faTwitter} /> X</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero