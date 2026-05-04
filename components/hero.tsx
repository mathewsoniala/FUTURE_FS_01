import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import grimore from '../public/Wallpaper/Lukuh.jpg'
import Image from 'next/image'
import { Resume } from '@/Types/resume'
import { supabase } from '@/createClient'

function Hero() {
  const [resumeURL, setResumeURL] = useState<Resume | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchResume = async () => {
      const { data, error } = await supabase
        .from("resume")
        .select("*")
        .eq("is_active", true)
        .single();

      if (error) {
        console.log('Error While Fetching: ', error);
      } else {
        setResumeURL(data);
        console.log("Data", data);
      }
      setIsLoading(false);
    };
    fetchResume();
  }, []);

  const handleDownloadResume = () => {
    if (resumeURL?.file_url) {
      const link = document.createElement('a');
      link.href = resumeURL.file_url;
      link.download = resumeURL.file_name || 'Mathews_Oniala_Resume.pdf';
      link.target = '_blank';
      link.click();
    }
     else {
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Mathews_Oniala_Resume.pdf';
      link.click();
    }
  };

  const handleViewResume = () => {
    if (resumeURL?.file_url) {
      window.open(resumeURL.file_url, '_blank');
    } else {
      window.open('/resume.pdf', '_blank');
    }
  };

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
              {/* Option 1: Download button */}
              <button onClick={handleDownloadResume} className="btn-secondary">
                {isLoading ? 'Loading...' : 'Resume (PDF)'}
              </button>
              
              {/* Option 2: View in browser (uncomment if preferred) */}
              {/* <button onClick={handleViewResume} className="btn-secondary">
                {isLoading ? 'Loading...' : 'View Resume →'}
              </button> */}
            </div>
            <div className="hero-social">
              <a href="https://github.com/mathewsoniala"><FontAwesomeIcon icon={faGithub} /> GitHub</a>  •  
              <a href="https://www.linkedin.com/in/mathews-oniala-a82927274"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>  •  
              <a href="https://twitter.com/OnialaMathews"><FontAwesomeIcon icon={faTwitter} /> X</a>
            </div>
            
            {/* Optional: Show resume info if loaded */}
            {resumeURL && !isLoading && (
              <div className="resume-info" style={{ fontSize: '12px', marginTop: '10px', opacity: 0.7 }}>
                ✓ Resume loaded from database
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero